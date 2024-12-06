# Positional Highlighter README

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