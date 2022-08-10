"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main() {
    let dado = {
        "input": {
            "embossing": {
                "cetelem": {
                    "DATA_REF": "",
                    "EVENTO": "",
                    "EMBOS": "",
                    "CLIENTE": "",
                    "DOSSIE": "",
                    "CARTAO": "",
                    "TIPO_CLIENTE": "",
                    "CADEIA": "",
                    "NOME_CADEIA": "",
                    "BADEIRA": "",
                    "CPF": "",
                    "TEL_COM": "",
                    "TEL_CEL": "",
                    "EMAIL": "",
                    "ENDERECO": "",
                    "NUMERO": "",
                    "COMPLEMENTO": "",
                    "BAIRRO": "",
                    "CIDADE": "",
                    "UF": "",
                    "CEP": "",
                    "PRODUTO": ""
                }
            },
            "transporte": [],
            "atendimentos_md": []
        },
        "fase": "",
        "campos": {
            "historico_cartao": [],
            "status_cartao": "",
            "__mktzap_desatualizada": false,
            "cpf_cliente": "",
            "nome_cliente": "",
            "nome_cadeia": "",
            "transportadora": "",
            "codigo_rastreio": "",
            "cartao_entregue": false
        },
        "canais": {
            "existentes": [],
            "selecionado": false
        },
    };
    dado.input.embossing.cetelem.CIDADE = "guarapari";
    dado.fase = "Recepcao";
    console.log(JSON.stringify(dado));
    console.log(JSON.stringify(dado));
}
main();
