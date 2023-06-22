import React from 'react';

import * as S from './styles';

import { CardListEvent } from '../../components/CardListEvent';
import { Filters } from '../../components/Filters';

export const Search = () => {
  return (
      <S.Container>
        <S.Header>
          <S.Title>
            Buscar evento
          </S.Title>
        </S.Header>
        <Filters/>
        {/* <S.Events>
          <CardListEvent />
          <CardListEvent />
        </S.Events> */}
      </S.Container>
  )
}
