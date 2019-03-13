var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "mensaje",
				"type": "string"
			}
		],
		"name": "escribirMensaje",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contadorMensajes",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "creador",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mensajes",
		"outputs": [
			{
				"name": "emisor",
				"type": "address"
			},
			{
				"name": "mensaje",
				"type": "string"
			},
			{
				"name": "fechaPublicacion",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var addressContrato = "0x4c548be5f82f5d3bd823b32b79aae3da08dc58ec1abd16cf49944edef28d294e";
var contrato = web3.eth.contract(abi);
var funciones = contrato.at(addressContrato);
