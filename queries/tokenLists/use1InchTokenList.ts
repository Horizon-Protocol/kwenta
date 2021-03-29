import { useQuery, QueryConfig } from 'react-query';
import axios from 'axios';
import keyBy from 'lodash/keyBy';

import QUERY_KEYS from 'constants/queryKeys';

import { TokenListQueryResponse, TokenListResponse } from './types';

const use1InchTokenList = (options?: QueryConfig<TokenListQueryResponse>) => {
	return useQuery<TokenListQueryResponse>(
		QUERY_KEYS.TokenLists.OneInch,
		async () => {
			const response = await axios.get<TokenListResponse>('https://tokens.1inch.eth.link');

			return {
				tokens: response.data.tokens,
				tokensMap: keyBy(response.data.tokens, 'symbol'),
			};
		},
		{
			refetchInterval: false,
			refetchOnWindowFocus: false,
			...options,
		}
	);
};

export default use1InchTokenList;
