import React, { FC } from 'react';
import styled from 'styled-components';

import ChangePercent from 'components/ChangePercent';

import { CurrencyKey } from 'constants/currency';

import { formatCurrency } from 'utils/formatters/number';

import { ContainerRowMixin } from '../common';

type CurrencyPriceProps = {
	currencyKey: CurrencyKey;
	price: number;
	sign?: string;
	change?: number;
};

export const CurrencyPrice: FC<CurrencyPriceProps> = ({
	currencyKey,
	price,
	sign,
	change,
	...rest
}) => (
	<Container {...rest}>
		<Price className="price">{formatCurrency(currencyKey, price, { sign })}</Price>
		{change != null && <ChangePercent className="percent" value={change} />}
	</Container>
);

const Container = styled.span`
	${ContainerRowMixin};
	font-family: ${(props) => props.theme.fonts.mono};
	color: ${(props) => props.theme.colors.white};
`;

const Price = styled.span``;

export default CurrencyPrice;