export const mockShortContract = {
	canOpenLoans: true,
	interactionDelay: '3600',
	issueFeeRate: '5000000000000000',
	manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
	maxLoansPerAccount: '50',
	minCollateral: '1000000000000000000000',
	minCratio: '1200000000000000000',
	contractUpdates: [
		{
			value: '5000000000000000',
			field: 'issueFeeRate',
			id: '0xf695e5c2e8d4af92ecd553e7da3164eeggcb96f3d0bc5d82a9e92332f4cc06c9-129',
			timestamp: '1610963050',
			blockNumber: '11876753',
		},
	],
};

export const mockShorts = [
	{
		account: '0x62f7a1f94aba23ed2dd108f8d23aa3e7d452565b',
		closedAt: '1612428720',
		collateralChanges: [
			{
				amount: '30000000000000000000',
				collateralAfter: '970000000000000000000',
				id: '0xf695e5c2e8d4af92ecd553e7da3164eeffcb96f3d0bc5d82a9e92332f4cc06c9-129',
				isDeposit: false,
				timestamp: '1610963050',
				blockNumber: '11876753',
			},
		],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '44650504719745945992',
		collateralLockedPrice: 1,
		contractData: mockShortContract,
		createdAt: '1610688253',
		createdAtBlock: '11876753',
		accruedInterestLastUpdateTimestamp: '1610688253',
		id: '47',
		isOpen: false,
		liquidations: [
			{
				id: '0x2164bdf7a846d0c944777135040f34861a18a7d3bc18c34f1787193370df91ba-205',
				isClosed: false,
				liquidatedAmount: '430270489538240958',
				liquidatedCollateral: '622951780910799995716',
				liquidator: '0x2ece7bf9c586450b66ade29a68633a9e23138802',
				timestamp: '1611021624',
				blockNumber: '11876753',
			},
			{
				id: '0xb525b1ff59e5e58e9426a0b16eb95edfd61c9c33d87b3121e71e22279a245a76-188',
				isClosed: false,
				liquidatedAmount: '193534546441518467',
				liquidatedCollateral: '302397714369454058292',
				liquidator: '0x2ece7bf9c586450b66ade29a68633a9e23138802',
				timestamp: '1611094704',
				blockNumber: '11876753',
			},
		],
		loanChanges: [
			{
				amount: '150000000000000000',
				id: '0x0dcf6fc58c41abf5ef649b09cfc99f50c3e2e476f8bac138d2708590d441b04a-109',
				isRepayment: false,
				loanAfter: '650000000000000000',
				timestamp: '1610798542',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '26194964020240575',
		synthBorrowedPrice: 325.23,
		txHash: '0xc07149d6d41f30f9e3e85ecee7ac777eba7dc381c04eebd60f14418fc6b8e4a1',
	},
	{
		account: '0xe67163ab11d4b39c5616bd84bbdf8efbdf7a5d00',
		closedAt: '1610725555',
		collateralChanges: [],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1000000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1610702444',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '51',
		isOpen: false,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-54',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '500000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x44c6c5b815b65fe40ec0c7437434bb74336fb15da17d3383e09d5a301905e8d0',
	},
	{
		account: '0x62f7a1f94aba23ed2dd108f8d23aa3e7d452565b',
		closedAt: null,
		collateralChanges: [
			{
				amount: '250000000000000000000',
				collateralAfter: '1250000000000000000000',
				id: '0x261303a8320e627a512de9e34cda0d526a66b60523f7ede21c9807e442cf1bf8-177',
				isDeposit: true,
				timestamp: '1612425210',
				blockNumber: '11876753',
			},
		],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1250000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1612412117',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '57',
		isOpen: true,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '30000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x9fe9a646371702afd7859b2af52dce131713843274cef125fab56aeae73dbab3',
	},
	{
		account: '0x62f7a1f94aba23ed2dd108f8d23aa3e7d452565b',
		closedAt: '1612429734',
		collateralChanges: [],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1250000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1612426040',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '58',
		isOpen: false,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7342544300000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '15000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x67192e0d8d789b8344c6c8a7df1c07f117ddbc7efd6c8ec3027ce59ccea4936b',
	},
	{
		account: '0xbf3a6e2810ef22109919ca0edd785ee1e466efaa',
		closedAt: null,
		collateralChanges: [],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1500000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1612426755',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '59',
		isOpen: true,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '500000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x7d508a2de93dd9d2b85e12e7c4e84e4900e384e38f75abe003226382f867b86f',
	},
	{
		account: '0x62f7a1f94aba23ed2dd108f8d23aa3e7d452565b',
		closedAt: '1612428720',
		collateralChanges: [
			{
				amount: '30000000000000000000',
				collateralAfter: '970000000000000000000',
				id: '0xf695e5c2e8d4af92ecd553e7da3164eeffcb96f3d0bc5d82a9e92332f4cc06c9-129',
				isDeposit: false,
				timestamp: '1610963050',
				blockNumber: '11876753',
			},
		],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '44650504719745945992',
		collateralLockedPrice: 1,
		contractData: mockShortContract,
		createdAt: '1610688253',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '470',
		isOpen: false,
		liquidations: [
			{
				id: '0x2164bdf7a846d0c944777135040f34861a18a7d3bc18c34f1787193370df91ba-205',
				isClosed: false,
				liquidatedAmount: '430270489538240958',
				liquidatedCollateral: '622951780910799995716',
				liquidator: '0x2ece7bf9c586450b66ade29a68633a9e23138802',
				timestamp: '1611021624',
				blockNumber: '11876753',
			},
			{
				id: '0xb525b1ff59e5e58e9426a0b16eb95edfd61c9c33d87b3121e71e22279a245a76-188',
				isClosed: false,
				liquidatedAmount: '193534546441518467',
				liquidatedCollateral: '302397714369454058292',
				liquidator: '0x2ece7bf9c586450b66ade29a68633a9e23138802',
				timestamp: '1611094704',
				blockNumber: '11876753',
			},
		],
		loanChanges: [
			{
				amount: '150000000000000000',
				id: '0x0dcf6fc58c41abf5ef649b09cfc99f50c3e2e476f8bac138d2708590d441b04a-109',
				isRepayment: false,
				loanAfter: '650000000000000000',
				timestamp: '1610798542',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '26194964020240575',
		synthBorrowedPrice: 325.23,
		txHash: '0xc07149d6d41f30f9e3e85ecee7ac777eba7dc381c04eebd60f14418fc6b8e4a1',
	},
	{
		account: '0xe67163ab11d4b39c5616bd84bbdf8efbdf7a5d00',
		closedAt: '1610725555',
		collateralChanges: [],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1000000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1610702444',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '510',
		isOpen: false,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '500000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x44c6c5b815b65fe40ec0c7437434bb74336fb15da17d3383e09d5a301905e8d0',
	},
	{
		account: '0x62f7a1f94aba23ed2dd108f8d23aa3e7d452565b',
		closedAt: null,
		collateralChanges: [
			{
				amount: '250000000000000000000',
				collateralAfter: '1250000000000000000000',
				id: '0x261303a8320e627a512de9e34cda0d526a66b60523f7ede21c9807e442cf1bf8-177',
				isDeposit: true,
				timestamp: '1612425210',
				blockNumber: '11876753',
			},
		],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1250000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1612412117',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '570',
		isOpen: true,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '30000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x9fe9a646371702afd7859b2af52dce131713843274cef125fab56aeae73dbab3',
	},
	{
		account: '0x62f7a1f94aba23ed2dd108f8d23aa3e7d452565b',
		closedAt: '1612429734',
		collateralChanges: [],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1250000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1612426040',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '580',
		isOpen: false,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7342544300000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '15000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x67192e0d8d789b8344c6c8a7df1c07f117ddbc7efd6c8ec3027ce59ccea4936b',
	},
	{
		account: '0xbf3a6e2810ef22109919ca0edd785ee1e466efaa',
		closedAt: null,
		collateralChanges: [],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1500000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1612426755',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '590',
		isOpen: true,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '500000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x7d508a2de93dd9d2b85e12e7c4e84e4900e384e38f75abe003226382f867b86f',
	},
	{
		account: '0x62f7a1f94aba23ed2dd108f8d23aa3e7d452565b',
		closedAt: '1612429734',
		collateralChanges: [],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1250000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1612426040',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '5800',
		isOpen: false,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7342544300000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '15000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x67192e0d8d789b8344c6c8a7df1c07f117ddbc7efd6c8ec3027ce59ccea4936b',
	},
	{
		account: '0xbf3a6e2810ef22109919ca0edd785ee1e466efaa',
		closedAt: null,
		collateralChanges: [],
		collateralLocked: '0x7355534400000000000000000000000000000000000000000000000000000000',
		collateralLockedAmount: '1500000000000000000000',
		collateralLockedPrice: 1,
		contractData: {
			canOpenLoans: true,
			interactionDelay: '3600',
			issueFeeRate: '5000000000000000',
			manager: '0x067e398605e84f2d0aeec1806e62768c5110dcc6',
			maxLoansPerAccount: '50',
			minCollateral: '1000000000000000000000',
			minCratio: '1200000000000000000',
		},
		createdAt: '1612426755',
		accruedInterestLastUpdateTimestamp: '1610688253',
		createdAtBlock: '11876753',
		id: '590000',
		isOpen: true,
		liquidations: [],
		loanChanges: [
			{
				amount: '470000000000000000',
				id: '0xeefd9097fddc69f1303617081a5eb8a3fe4f22035156343edbbb714987bf2eea-53',
				isRepayment: true,
				loanAfter: '30000000000000000',
				timestamp: '1612428928',
				blockNumber: '11876753',
			},
		],
		synthBorrowed: '0x7345544800000000000000000000000000000000000000000000000000000000',
		synthBorrowedAmount: '500000000000000000',
		synthBorrowedPrice: 325.23,
		txHash: '0x7d508a2de93dd9d2b85e12e7c4e84e4900e384e38f75abe003226382f867b86f',
	},
];
