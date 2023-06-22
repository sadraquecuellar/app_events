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
        {[1,2,3,4,5,6,7,8,9].map((i) => (
          <CardListEvent key={i} />
        ))}
      </S.Container>
    </S.ScrollPage>
  )
}
