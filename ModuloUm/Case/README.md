*OUTPUT JSON*

Primeiramente, foram colocados todos os objetos de pedidos em uma lista (array), dentro desta lista os objetos que carregavam as informações de pedido, foram remodelados da seguinte forma:

Cada posição do array possui um objeto cujo a primeira propriedade é o order(pedido), esta propriedade possui ID(identificador do pedido) e 5 outras propriedades que possuem como valor, objetos com informações referentes a propriedade.
Exemplo:
[
    {
        "order": {
            "id": valor,
            "item": {informações item},
            "merchant": {informações merchant},
            "cart": {informações cart},
            "payments": {informações payments},           
            "customer": {informações customer},
        }
    },
        ...
]
____________________________________________________________________________________________________________________

--Propriedades de order e seus valores--

1- Item

A propriedade "item" possui como valor um objeto, com propriedades referentes às suas informações.
Exemplo da propriedade (newData.json):

            "item": {
                "id": 26551,
                "name": "Handcrafted Soft Tuna",
                "description": "withdrawal azure Handmade",
                "quantity": 45,
                "unitPrice": 7.244,
                "totalPrice": 325.98,
                "discount": 27.74
            }

2- Merchant

A propriedade "merchant" possui como valor um objeto, com propriedades referentes às suas informações. Em específico, possui a propriedade "address" que tem como valor um objeto com informações de endereço.
Exemplo da propriedade (newData.json):

            "merchant": {
                "name": "Reynolds - Goldner",
                "cnpj": "Veum and Sons",
                "address": {
                    "formattedAddress": "country: South Georgia and the South Sandwich Islands,state: IA,city: Roswell,coordinates_latitude: -71.1353,coordinates_longitude: 29.0286,neighborhood: Rhode Island,streetName: Will Branch,number: 63178,postalCode: 00394",
                    "country": "South Georgia and the South Sandwich Islands",
                    "neighborhood": "Rhode Island",
                    "streetName": "Will Branch",
                    "number": 63178
                }
            }

3- Cart

A propriedade "cart" possui como valor um objeto, com propriedades referentes às suas informações.
Exemplo da propriedade (newData.json):

                "cart": {
                    "id": 95468,
                    "subtotal": 325.98,
                    "total": 298.24
                }

4- Payments

A propriedade "payments" possui como valor um objeto, com propriedades referentes às suas informações. Dentro desse objeto há 2 propriedades: payment e charges. A propriedade "payment" possui como valor um array de objetos, dentro destes objetos se encontram as informações referentes ao pagamento. A propriedade charges possui como valor um objeto, também com suas respectivas informações payments_charges.
Exemplo da propriedade (newData.json):

                "payments": {
                    "payment": [
                        {
                            "method": "DEBIT",
                            "code": "368",
                            "value": 98.42,
                            "changeFor": 0
                        },
                        {
                            "method": "CREDIT",
                            "code": "412",
                            "value": 199.82,
                            "changeFor": 0
                        }
                    ],
                    "charges": {
                        "subTotal": 325.98,
                        "total": 298.24,
                        "totalDiscounts": 27.74,
                        "totalInCash": 0,
                        "change": 0
                    }
                }

5- Customer

A propriedade "customer" possui como valor um objeto, com propriedades referentes às suas informações. Em específico, assim como merchant, também possui a propriedade "address" que tem como valor um objeto com informações de endereço.
Exemplo da propriedade (newData.json):

                "customer": {
                    "firstName": "Miss Maxine Harber",
                    "displayName": "Gayle Blick",
                    "lastName": "Wiegand",
                    "phoneNumber": "1-999-984-9782",
                    "email": "Green55@yahoo.com",
                    "address": {
                        "country": "Cuba",
                        "neighborhood": "Bairro: Arizona"
                    }
                }

E assim são organizados os objetos sucessivamente dentro da lista de pedidos.
