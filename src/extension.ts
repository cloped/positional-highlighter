import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const command = vscode.commands.registerCommand(
        "positional-highlighter.format",
        () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                vscode.window.showInformationMessage("No editor is active.");
                return;
            }

            const document = editor.document;
            const text = document.getText();
            const lines = text.split("\n");

            // Read the rules from the configuration
            interface Rule {
                lineType: string;
                columnRanges: { start: number; end: number }[];
            }

            const rules: Rule[] = vscode.workspace.getConfiguration('positionalHighlighter').get('rules', []);

            // Function to generate RGB color
            function getRGBColor(index: number, total: number): [number, number, number] {
                const hue = (index / total) * 360;
                const saturation = 100;
                const lightness = 50;
                return hslToRgb(hue, saturation, lightness);
            }

            // Function to convert HSL to RGB
            function hslToRgb(h: number, s: number, l: number): [number, number, number] {
                s /= 100;
                l /= 100;
                const k = (n: number) => (n + h / 30) % 12;
                const a = s * Math.min(l, 1 - l);
                const f = (n: number) => l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);
                return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
            }

            // Create decoration types for each color
            const decorationTypes: { [color: string]: vscode.TextEditorDecorationType } = {};
            rules.forEach(rule => {
                rule.columnRanges?.forEach((range: any, index: number) => {
                    const [r, g, b] = getRGBColor(index, rule.columnRanges.length);
                    const color = `rgb(${r}, ${g}, ${b})`;
                    if (!decorationTypes[color]) {
                        decorationTypes[color] = vscode.window.createTextEditorDecorationType({
                            // color: color,
                            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)` // Optional: background color for emphasis
                        });
                    }
                });
            });

            const allDecorations: { [color: string]: vscode.Range[] } = {};

            lines.forEach((lineText, lineIndex) => {
                console.log("Line",lineIndex, lineText);
                rules.forEach(rule => {
                    console.log("Rule", rule.lineType);
                    // On future try to allow lineType to be a function
                    // if (rule.lineType(lineText, lineIndex)) {
                    const regex = new RegExp(rule.lineType.slice(1, -1));
                    console.log({
                        regex: regex,
                        text: lineText,
                        result: regex.test(lineText)
                    })
                    if (regex.test(lineText)) {    
                        rule.columnRanges?.forEach((range: { start: number; end: number; }, index: number) => {
                            const [r, g, b] = getRGBColor(index, rule.columnRanges.length);
                            const color = `rgb(${r}, ${g}, ${b})`;
                            if (!allDecorations[color]) {
                                allDecorations[color] = [];
                            }
                            if (lineText.length > range.start) {
                                const startPos = new vscode.Position(lineIndex, range.start);
                                const endPos = new vscode.Position(lineIndex, Math.min(range.end + 1, lineText.length));
                                allDecorations[color].push(new vscode.Range(startPos, endPos));
                            }
                        });
                    }
                });
            });

            Object.keys(allDecorations).forEach(color => {
                editor.setDecorations(decorationTypes[color], allDecorations[color]);
            });
        }
    );

    context.subscriptions.push(command);
}

export function deactivate() {}