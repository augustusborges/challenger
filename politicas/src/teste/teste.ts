export {}

interface andamentoTransporte {
    "courier": String,
    "timestamp_chamada": String,
    "timestamp_status": String,
    "classificacao": String,
    "dados": {
        "codigoRastreio": String,
        "codigoStatus": String,
        "descricaoStatus": String,
        "dataStatus": String,
        "tentativaEntrega": String,
        "UrlImagem": String
    }
}

interface atendimentoMesa {
    "tipo": String,
    "pendente": Boolean,
    "timestamp_atendimento": Date,
    "id_atendimento": Number,
    "novo_endereco": {
        "cep": String,
        "logradouro": String,
        "tipologradouro": String,
        "bairro": String,
        "estado": String,
        "cidade": String,
        "numero": String,
        "complemento": String
    },
    "chamadas": [
        {
            "timestamp": Date,
            "courier": String,
            "sucesso": Boolean,
            "erro": String
        }
    ],
    "tentativas": Number,
    "timestamp_conclusao": Date,
    "sucesso": Boolean
}

interface historicoAtendimento            {
    "eventDate": Date,
    "description": String
}

type dados_um={
    "input":{
        "embossing": {
            "cetelem": {
                "DATA_REF": String,
                "EVENTO": String,
                "EMBOS": String,
                "CLIENTE": String,
                "DOSSIE": String,
                "CARTAO": String,
                "TIPO_CLIENTE": String,
                "CADEIA": String,
                "NOME_CADEIA": String,
                "BADEIRA": String,
                "CPF": String,
                "TEL_COM": String,
                "TEL_CEL": String,
                "EMAIL": String,
                "ENDERECO": String,
                "NUMERO": String,
                "COMPLEMENTO": String,
                "BAIRRO": String,
                "CIDADE": String,
                "UF": String,
                "CEP": String,
                "PRODUTO": String
            }
        },
        "transporte": Array<andamentoTransporte>,
        "atendimentos_md": Array<atendimentoMesa>
    },
    "fase": String,
    "campos": {
        "historico_cartao": Array<historicoAtendimento>,
        "status_cartao": String,
        "__mktzap_desatualizada": Boolean,
        "cpf_cliente": String,
        "nome_cliente": String,
        "nome_cadeia": String,
        "transportadora": String,
        "codigo_rastreio": String,
        "cartao_entregue": Boolean
    },
    "canais": {
        "existentes": Array<any>,
        "selecionado": Boolean
    },
}

function main(){

    let  dado:dados_um = {
        "input":{
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
    }
    ;

    dado.input.embossing.cetelem.CIDADE = "guarapari";
    dado.fase = "Recepcao";

    console.log(JSON.stringify(dado));
    console.log(JSON.stringify(dado));
    
}

main();
 
