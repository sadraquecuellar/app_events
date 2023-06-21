import React from 'react';

import { CardListEvent } from '../CardListEvent';

import * as S from './styles';

export const ListEvents= () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Próximos Eventos
        </S.Title>
      </S.Header>
      <S.ContainerCards>
        <CardListEvent/>
        <CardListEvent/>
        <CardListEvent/>
        <CardListEvent/>
      </S.ContainerCards>
    </S.Container>
  )
}
