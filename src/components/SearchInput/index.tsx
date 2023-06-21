import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import * as S from './styles';

export const SearchInput = () => {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.Icon>
          <FontAwesome name="search" size={16} color="#999" />
        </S.Icon>
        <S.Search placeholder="Buscar evento..." clearButtonMode="always" />
      </S.SearchContainer>
    </S.Container>
  )
}
