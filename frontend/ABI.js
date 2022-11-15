const ABI = [
	{
		inputs: [
			{
				internalType: 'string',
				name: '_key',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_value',
				type: 'string',
			},
		],
		name: 'createNewKey',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_key',
				type: 'string',
			},
		],
		name: 'deleteKey',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getMyPassword',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'key',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'value',
						type: 'string',
					},
				],
				internalType: 'struct PasswordManager.password[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_key',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_value',
				type: 'string',
			},
		],
		name: 'updateKey',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];

export default ABI;
