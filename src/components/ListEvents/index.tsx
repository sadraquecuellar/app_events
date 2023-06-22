import React from 'react';

import { CardListEvent } from '../CardListEvent';

import * as S from './styles';

type ListEventsType = {
  join: () => void
}

export const ListEvents= ({join}: ListEventsType) => {

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Próximos Eventos
        </S.Title>
      </S.Header>
      <S.ContainerCards>
        {[1,2,3].map((event)=>(
          <CardListEvent key={event} join={join}/>
        ))}
      </S.ContainerCards>
    </S.Container>
  )
}
