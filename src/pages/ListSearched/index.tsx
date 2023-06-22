import React from 'react';
import { View } from 'react-native';

import * as S from './styles';
import { CardListEvent } from '../../components/CardListEvent';

export const ListSearched = () => {
  return (
    <S.ScrollPage>
      <S.Container>
        <S.Header>
          <S.Title>
            Resultado da busca
          </S.Title>
        </S.Header>
        <CardListEvent />
        <CardListEvent />
        <CardListEvent />
        <CardListEvent />
        <CardListEvent />
        <CardListEvent />
        <CardListEvent />
        <CardListEvent />
        <CardListEvent />
      </S.Container>
    </S.ScrollPage>
  )
}
