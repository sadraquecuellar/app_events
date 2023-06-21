import React from 'react';

import { SearchInput } from '../../components/SearchInput';

import * as S from './styles';
import { FeaturedEvent } from '../../components/FeaturedEvent';

export const Home = () => {
  return (
    <S.Container>
      <SearchInput/>
      <FeaturedEvent/>
    </S.Container>
  )
}
