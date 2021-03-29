import { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';

import synthetix from 'lib/synthetix';

import useSynthsBalancesQuery from 'queries/walletBalances/useSynthsBalancesQuery';

import Button from 'components/Button';
import Loader from 'components/Loader';
import SearchInput from 'components/Input/SearchInput';

import useDebouncedMemo from 'hooks/useDebouncedMemo';

import { FlexDivCentered, BottomShadow } from 'styles/common';

import { CurrencyKey } from 'constants/currency';
import { DEFAULT_SEARCH_DEBOUNCE_MS } from 'constants/defaults';

import { RowsHeader, RowsContainer, CenteredModal } from '../common';

import TokenRow from './TokenRow';
import use1InchTokenList from 'queries/tokenLists/use1InchTokenList';

type SelectTokenModalProps = {
	onDismiss: () => void;
	onSelect: (currencyKey: CurrencyKey) => void;
};

export const SelectTokenModal: FC<SelectTokenModalProps> = ({ onDismiss, onSelect }) => {
	const { t } = useTranslation();
	const [assetSearch, setAssetSearch] = useState<string>('');

	const OneInchTokenListQuery = use1InchTokenList();
	const OneInchTokenList = OneInchTokenListQuery.isSuccess
		? OneInchTokenListQuery.data?.tokens ?? []
		: [];

	const tokensWalletBalancesQuery = useSynthsBalancesQuery();
	const synthBalances = tokensWalletBalancesQuery.isSuccess
		? tokensWalletBalancesQuery.data ?? null
		: null;

	const isLoading = OneInchTokenListQuery.isLoading || tokensWalletBalancesQuery.isLoading;

	const searchFilteredSynths = useDebouncedMemo(
		() =>
			assetSearch
				? OneInchTokenList.filter(({ name, symbol, address }) => {
						const assetSearchQueryLC = assetSearch.toLowerCase();

						return (
							name.toLowerCase().includes(assetSearchQueryLC) ||
							symbol.toLowerCase().includes(assetSearchQueryLC) ||
							address.toLowerCase() === assetSearchQueryLC
						);
				  })
				: OneInchTokenList,
		[OneInchTokenList, assetSearch],
		DEFAULT_SEARCH_DEBOUNCE_MS
	);

	const tokensResults = searchFilteredSynths;

	// const tokensResults = useMemo(() => {
	// 	const synthsList = assetSearch ? searchFilteredSynths : categoryFilteredSynths;
	// 	if (tokensWalletBalancesQuery.isSuccess) {
	// 		return orderBy(
	// 			synthsList,
	// 			(synth) => {
	// 				const synthBalance = synthBalances?.balancesMap[synth.name];
	// 				return synthBalance != null ? synthBalance.usdBalance.toNumber() : 0;
	// 			},
	// 			'desc'
	// 		);
	// 	}
	// 	return synthsList;
	// }, [
	// 	assetSearch,
	// 	searchFilteredSynths,
	// 	categoryFilteredSynths,
	// 	tokensWalletBalancesQuery.isSuccess,
	// 	synthBalances,
	// ]);

	return (
		<StyledCenteredModal
			onDismiss={onDismiss}
			isOpen={true}
			title={t('modals.select-base-currency.title')}
		>
			<SearchContainer>
				<AssetSearchInput
					placeholder={t('modals.select-base-currency.search.placeholder')}
					onChange={(e) => {
						setAssetSearch(e.target.value);
					}}
					value={assetSearch}
					autoFocus={true}
				/>
			</SearchContainer>
			<RowsHeader>
				<span>
					{assetSearch ? (
						<span>{t('modals.select-base-currency.header.search-results')}</span>
					) : (
						t('modals.select-base-currency.header.all-synths')
					)}
				</span>
				<span>{t('modals.select-base-currency.header.holdings')}</span>
			</RowsHeader>
			<RowsContainer>
				{isLoading ? (
					<Loader />
				) : tokensResults.length > 0 ? (
					tokensResults.map((token) => {
						const currencyKey = token.symbol;

						return (
							<TokenRow
								key={currencyKey}
								onClick={() => {
									onSelect(currencyKey);
									onDismiss();
								}}
								// tokenBalance={synthBalances?.balancesMap[currencyKey]}
								token={token}
							/>
						);
					})
				) : (
					<EmptyDisplay>{t('modals.select-base-currency.search.empty-results')}</EmptyDisplay>
				)}
			</RowsContainer>
			<StyledBottomShadow />
		</StyledCenteredModal>
	);
};

const StyledBottomShadow = styled(BottomShadow)`
	position: absolute;
	height: 32px;
`;

const StyledCenteredModal = styled(CenteredModal)`
	[data-reach-dialog-content] {
		width: 400px;
	}
	.card-body {
		height: 80vh;
		padding: 16px 0;
		overflow: hidden;
	}
`;

const SearchContainer = styled.div`
	margin: 0 16px 12px 16px;
`;

const AssetSearchInput = styled(SearchInput)`
	font-size: 16px;
	height: 40px;
	font-family: ${(props) => props.theme.fonts.bold};
	::placeholder {
		text-transform: capitalize;
		color: ${(props) => props.theme.colors.silver};
	}
`;

const EmptyDisplay = styled(FlexDivCentered)`
	justify-content: center;
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.bold};
	text-align: center;
	margin: 24px 0px;
	height: 50px;
	color: ${(props) => props.theme.colors.white};
`;

export default SelectTokenModal;
