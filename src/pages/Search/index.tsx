import React from 'react';

import * as S from './styles';

import { SearchInput } from '../../components/SearchInput';
import { CardListEvent } from '../../components/CardListEvent';
import { Filter } from '../../components/Filter';

export const Search = () => {
  return (
      <S.Container>
        <S.Header>
          <S.Title>
            Buscar
          </S.Title>
        </S.Header>
        <SearchInput/>
        <Filter/>
        {/* <S.Events>
          <CardListEvent />
          <CardListEvent />
        </S.Events> */}
      </S.Container>
  )
}
