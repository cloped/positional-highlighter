# Positional Highlighter

A Visual Studio Code extension that enhances the visualization of positional files by applying customizable color highlighting to specific column ranges based on line patterns. Perfect for working with fixed-width formatted files like bank interchange files (CNAB, FEBRABAN), EDI files, or any other positional data format.

## Features

- **Pattern-based line detection**: Use regex patterns to identify different line types
- **Column range highlighting**: Define specific column ranges for each line type
- **Automatic color generation**: Each column range gets a unique, visually distinct color using HSL color generation
- **Configurable rules**: Define multiple rules for different line patterns
- **Easy activation**: Trigger highlighting with a simple command

## How It Works

The extension works by:

1. **Reading configuration**: Loads rules from your VS Code settings that define line patterns and column ranges
2. **Pattern matching**: For each line in your active file, it tests against regex patterns defined in your rules
3. **Column highlighting**: When a line matches a pattern, the extension applies color decorations to the specified column ranges
4. **Color generation**: Colors are automatically generated using HSL (Hue, Saturation, Lightness) algorithm to ensure visual distinction between adjacent ranges
5. **Visual feedback**: Each column range is highlighted with a semi-transparent background color

### Technical Details

- **Language**: TypeScript
- **Build system**: Webpack (for bundling)
- **Activation**: On-demand via command palette
- **Decoration strategy**: Uses VS Code's TextEditorDecorationType API for performant syntax highlighting

## Installation (Development Mode)

To install and run this extension in development mode:

### Prerequisites

- Node.js (version 20.x or higher)
- Visual Studio Code (version 1.95.0 or higher)
- Git

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/positional-highlighter.git
   cd positional-highlighter
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile the extension**:
   ```bash
   npm run compile
   ```
   
   Or, to watch for changes during development:
   ```bash
   npm run watch
   ```

4. **Open in VS Code**:
   ```bash
   code .
   ```

5. **Run the extension**:
   - Press `F5` or go to `Run > Start Debugging`
   - This will open a new VS Code window (Extension Development Host) with your extension loaded
   - The original window will show debug logs and allow you to set breakpoints

6. **Test the extension**:
   - In the Extension Development Host window, open a positional file
   - Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Start Positional Highlighter" and press Enter
   - Your file should now display with colored column ranges

### Development Workflow

- **Make changes**: Edit files in `src/extension.ts`
- **Reload extension**: In the Extension Development Host window, press `Cmd+R` (macOS) or `Ctrl+R` (Windows/Linux) to reload the extension
- **View logs**: Check the Debug Console in the main VS Code window for `console.log` output
- **Run tests**: `npm test`
- **Lint code**: `npm run lint`

### Building for Production

To create a production build:
```bash
npm run package
```

This creates an optimized bundle in the `dist` folder.

## Configuration

You can configure the rules for positional highlighting in your settings. Here is an example configuration:

```json
"positionalHighlighter.rules": [
        {
            "lineType": "/^[\\s\\d\\w]{13}ZZ[\\s\\d\\w]*$/",
            "columnRanges": [
                { "start": 0, "end": 2 },    // CÓDIGO DO BANCO
                { "start": 3, "end": 6 },    // CÓDIGO DO LOTE
                { "start": 7, "end": 7 },    // TIPO DE REGISTRO
                { "start": 8, "end": 13 },   // BRANCOS
                { "start": 14, "end": 16 },  // LAYOUT DE ARQUIVO
                { "start": 17, "end": 17 },  // EMPRESA – INSCRIÇÃO
                { "start": 18, "end": 31 },  // INSCRIÇÃO NÚMERO
                { "start": 32, "end": 51 },  // BRANCOS
                { "start": 52, "end": 56 },  // AGÊNCIA
                { "start": 57, "end": 57 },  // BRANCOS
                { "start": 58, "end": 69 },  // CONTA
                { "start": 70, "end": 70 },  // BRANCOS
                { "start": 71, "end": 71 },  // DAC
                { "start": 72, "end": 101 }, // NOME DA EMPRESA
                { "start": 102, "end": 131 },// NOME DO BANCO
                { "start": 132, "end": 141 },// BRANCOS
                { "start": 142, "end": 142 },// ARQUIVO-CÓDIGO
                { "start": 143, "end": 150 },// DATA DE GERAÇÃO
                { "start": 151, "end": 156 },// HORA DA GERAÇÃO
                { "start": 157, "end": 165 },// ZEROS
                { "start": 166, "end": 170 } // UNIDADE DE DENSIDADE
            ]
        },
        { 
            "lineType": "/^[\\s\\d\\w]{13}A[\\s\\d\\w]*$/",
            "columnRanges": [
                { "start": 0, "end": 2 },    // CÓDIGO DO BANCO
                { "start": 3, "end": 6 },    // CÓDIGO DO LOTE
                { "start": 7, "end": 7 },    // TIPO DE REGISTRO
                { "start": 8, "end": 8 },    // TIPO DE OPERAÇÃO
                { "start": 9, "end": 10 },   // TIPO DE PAGAMENTO
                { "start": 11, "end": 12 },  // FORMA DE PAGAMENTO
                { "start": 13, "end": 15 },  // LAYOUT DO LOTE
                { "start": 16, "end": 16 },  // BRANCOS
                { "start": 17, "end": 17 },  // EMPRESA – INSCRIÇÃO
                { "start": 18, "end": 31 },  // INSCRIÇÃO NÚMERO
                { "start": 32, "end": 35 },  // IDENTIFICAÇÃO DO LANÇAMENTO
                { "start": 36, "end": 51 },  // BRANCOS
                { "start": 52, "end": 56 },  // AGÊNCIA
                { "start": 57, "end": 57 },  // BRANCOS
                { "start": 58, "end": 69 },  // CONTA
                { "start": 70, "end": 70 },  // BRANCOS
                { "start": 71, "end": 71 },  // DAC
                { "start": 72, "end": 101 }, // NOME DA EMPRESA
                { "start": 102, "end": 131 },// FINALIDADE DO LOTE
                { "start": 132, "end": 141 },// HISTÓRICO DE C/C
                { "start": 142, "end": 171 },// ENDEREÇO DA EMPRESA
                { "start": 172, "end": 176 },// NÚMERO
                { "start": 177, "end": 191 },// COMPLEMENTO
                { "start": 192, "end": 211 },// CIDADE
                { "start": 212, "end": 219 },// CEP
                { "start": 220, "end": 221 },// ESTADO
                { "start": 222, "end": 229 },// BRANCOS
                { "start": 230, "end": 239 } // OCORRÊNCIAS
            ]
        },
        { 
            "lineType": "/^[\\s\\d\\w]{7}1C[\\s\\d\\w]*$",
            "columnRanges": [
                { "start": 0, "end": 2 },    // CÓDIGO DO BANCO
                { "start": 3, "end": 6 },    // CÓDIGO DO LOTE
                { "start": 7, "end": 7 },    // TIPO DE REGISTRO
                { "start": 8, "end": 8 },    // TIPO DE OPERAÇÃO
                { "start": 9, "end": 10 },   // TIPO DE PAGAMENTO
                { "start": 11, "end": 12 },  // FORMA DE PAGAMENTO
                { "start": 13, "end": 15 },  // LAYOUT DO LOTE
                { "start": 16, "end": 16 },  // BRANCOS
                { "start": 17, "end": 17 },  // EMPRESA – INSCRIÇÃO
                { "start": 18, "end": 31 },  // INSCRIÇÃO NÚMERO
                { "start": 32, "end": 35 },  // IDENTIFICAÇÃO DO LANÇAMENTO
                { "start": 36, "end": 51 },  // BRANCOS
                { "start": 52, "end": 56 },  // AGÊNCIA
                { "start": 57, "end": 57 },  // BRANCOS
                { "start": 58, "end": 69 },  // CONTA
                { "start": 70, "end": 70 },  // BRANCOS
                { "start": 71, "end": 71 },  // DAC
                { "start": 72, "end": 101 }, // NOME DA EMPRESA
                { "start": 102, "end": 131 },// FINALIDADE DO LOTE
                { "start": 132, "end": 141 },// HISTÓRICO DE C/C
                { "start": 142, "end": 171 },// ENDEREÇO DA EMPRESA
                { "start": 172, "end": 176 },// NÚMERO
                { "start": 177, "end": 191 },// COMPLEMENTO
                { "start": 192, "end": 211 },// CIDADE
                { "start": 212, "end": 219 },// CEP
                { "start": 220, "end": 221 },// ESTADO
                { "start": 222, "end": 229 },// BRANCOS
                { "start": 230, "end": 239 } // OCORRÊNCIAS
            ]
        }
        // Add more rules here if needed
    ]
```

### Configuration Details

To configure the extension, add the above settings to your VS Code settings file:

1. Open Command Palette (`Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows/Linux)
2. Type "Preferences: Open Settings (JSON)"
3. Add the `positionalHighlighter.rules` configuration

#### Rule Structure

Each rule consists of:

- **`lineType`**: A regex pattern enclosed in forward slashes (`/pattern/`) that matches the line type
  - Example: `"/^[\\s\\d\\w]{13}ZZ[\\s\\d\\w]*$/"` matches lines where characters 13-14 are "ZZ"
  - The pattern is extracted and converted to a JavaScript RegExp object
  
- **`columnRanges`**: An array of objects defining the start and end positions (0-indexed) for each field
  - `start`: The starting column position (inclusive)
  - `end`: The ending column position (inclusive)
  - You can add comments after each range to document what field it represents

## Usage

1. Open a positional file in VS Code
2. Open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
3. Type and select "Start Positional Highlighter"
4. The extension will apply color highlighting to all matching lines based on your configured rules

### Tips

- Colors are automatically generated based on the number of column ranges, ensuring good visual distinction
- Each column range gets a different color with 20% opacity for better readability
- The extension processes all lines in the file and applies decorations immediately
- To remove highlighting, simply close and reopen the file, or reload the window

## Use Cases

This extension is particularly useful for:

- **Bank interchange files** (CNAB 240, CNAB 400, FEBRABAN)
- **EDI files** (Electronic Data Interchange)
- **Fixed-width database exports**
- **Legacy system data files**
- **Mainframe data formats**
- Any file format with positional/fixed-width columns

## Troubleshooting

### Highlighting doesn't appear

- Check that your regex patterns are correctly formatted (enclosed in forward slashes)
- Verify that your column ranges don't exceed the line length
- Check the Debug Console for any error messages (View > Debug Console)

### Wrong columns are highlighted

- Remember that positions are 0-indexed (first character is position 0)
- Ensure your `start` and `end` values are correct
- The `end` position is inclusive

### Extension doesn't activate

- Make sure you've compiled the extension (`npm run compile`)
- Check that Node.js and VS Code versions meet the minimum requirements
- Try reloading the Extension Development Host window (`Cmd+R` or `Ctrl+R`)

## Project Structure

```
positional-highlighter/
├── src/
│   ├── extension.ts          # Main extension logic
│   └── test/
│       └── extension.test.ts # Test files
├── dist/                      # Compiled output (generated)
├── package.json               # Extension manifest and dependencies
├── tsconfig.json             # TypeScript configuration
├── webpack.config.js         # Webpack bundling configuration
├── eslint.config.mjs         # ESLint configuration
└── README.md                 # This file
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and test thoroughly
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.

## Support

If you encounter issues or have questions:

- Check the [Troubleshooting](#troubleshooting) section
- Open an issue on the GitHub repository
- Review the debug console for error messages

---

**Enjoy using Positional Highlighter!** 🎨
