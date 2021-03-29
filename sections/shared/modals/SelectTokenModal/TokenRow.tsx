import { FC } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { NO_VALUE } from 'constants/placeholder';
import { CurrencyKey } from 'constants/currency';

import Currency from 'components/Currency';

import { SelectableCurrencyRow } from 'styles/common';

import { Token } from 'queries/tokenLists/types';

import useSelectedPriceCurrency from 'hooks/useSelectedPriceCurrency';

import { isWalletConnectedState } from 'store/wallet';

type TokenRowProps = {
	token: Token;
	onClick: () => void;
	tokenBalance?: Record<CurrencyKey, string>;
};
const TokenRow: FC<TokenRowProps> = ({ token, onClick, tokenBalance }) => {
	// const { selectPriceCurrencyRate, selectedPriceCurrency } = useSelectedPriceCurrency();
	// const isWalletConnected = useRecoilValue(isWalletConnectedState);

	const currencyKey = token.symbol;

	return (
		<StyledSelectableCurrencyRow key={currencyKey} onClick={onClick} isSelectable={true}>
			<Currency.Name
				name={token.name}
				showIcon={true}
				iconProps={{ type: 'token' }}
				{...{ currencyKey }}
			/>
			{/* {isWalletConnected ? (
				<Currency.Amount
					amount={tokenBalance?.balance ?? 0}
					totalValue={tokenBalance?.usdBalance ?? 0}
					sign={selectedPriceCurrency.sign}
					conversionRate={selectPriceCurrencyRate}
					{...{ currencyKey }}
				/>
			) : (
				NO_VALUE
			)} */}
		</StyledSelectableCurrencyRow>
	);
};

const StyledSelectableCurrencyRow = styled(SelectableCurrencyRow)`
	padding: 5px 16px;
`;

export default TokenRow;
