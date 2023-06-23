import React from 'react';

import { CardListEvent } from '../CardListEvent';

import * as S from './styles';
import { EventType } from '../../types/EventType';

type ListEventsType = {
  join: () => void
  events: EventType[]
}

export const ListEvents= ({join, events}: ListEventsType) => {

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Próximos Eventos
        </S.Title>
      </S.Header>
      <S.ContainerCards>
        {events.map((event, index)=>(
          <CardListEvent key={index} join={join} event={event}/>
        ))}
      </S.ContainerCards>
    </S.Container>
  )
}
