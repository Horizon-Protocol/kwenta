import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { slippageState } from 'store/ui';
import { formatPercent } from 'utils/formatters/number';

import { Svg } from 'react-optimized-image';

import {
	DropdownSelection,
	NumericValue,
	SolidTooltip,
	SolidTooltipContent,
	SolidTooltipCustomValue,
	SolidTooltipCustomValueContainer,
	SolidTooltipItemButton,
} from 'styles/common';

import CaretDownIcon from 'assets/svg/app/caret-down.svg';
import { DEFAULT_SLIPPAGE } from 'constants/defaults';

const SLIPPAGE_OPTIONS = [0.1, 0.5, 1, 3];

type SlippageSelectorProps = {};

export const SlippageSelector: FC<SlippageSelectorProps> = () => {
	const { t } = useTranslation();

	const [slippage, setSlippage] = useRecoilState(slippageState);
	const [customSlippage, setCustomSlippage] = useState<string>('');
	const [tooltipOpened, setTooltipOpened] = useState<boolean>(false);

	return (
		<Container>
			<Label>{t('dashboard.onboard.convert-card.slippage-selector.title')}</Label>
			<StyledSolidTooltip
				onShow={() => setTooltipOpened(true)}
				onHide={() => setTooltipOpened(false)}
				offset={[0, 20]}
				content={
					<SolidTooltipContent>
						<SolidTooltipCustomValueContainer>
							<SolidTooltipCustomValue
								value={customSlippage}
								onChange={(_, value) => {
									if (value !== '') {
										const numValue = Number(value);
										setSlippage(numValue >= 0 ? numValue : DEFAULT_SLIPPAGE);
									}
									setCustomSlippage(value);
								}}
								placeholder={t('common.custom')}
							/>
						</SolidTooltipCustomValueContainer>
						{SLIPPAGE_OPTIONS.map((slippageOption) => (
							<SolidTooltipItemButton
								key={`slippage-${slippageOption}`}
								variant="select"
								onClick={() => {
									setSlippage(slippageOption);
								}}
								isActive={slippageOption === slippage}
							>
								<span>Slippage</span>
								<NumericValue>
									{formatPercent(slippageOption / 100, { minDecimals: 2 })}
								</NumericValue>
							</SolidTooltipItemButton>
						))}
					</SolidTooltipContent>
				}
			>
				<DropdownSelection tooltipOpened={tooltipOpened}>
					{formatPercent(slippage / 100, { minDecimals: 2 })}{' '}
					<Svg src={CaretDownIcon} viewBox={`0 0 ${CaretDownIcon.width} ${CaretDownIcon.height}`} />
				</DropdownSelection>
			</StyledSolidTooltip>
		</Container>
	);
};

const StyledSolidTooltip = styled(SolidTooltip)`
	width: 130px;
`;

const Container = styled.div`
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Label = styled.div`
	color: ${(props) => props.theme.colors.silver};
`;

export default SlippageSelector;
