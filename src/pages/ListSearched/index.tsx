import React from 'react';
import { useQuery } from 'react-query';
import { CardListEvent } from '../../components/CardListEvent';
import { RouteType } from '../../types/RouteType';
import { getEvents } from '../../services/eventsService';
import * as S from './styles';
import { EventType } from '../../types/EventType';

interface ListProps{
  handleDetails: ()=> void;
  events: EventType[]
}

export const List = ({handleDetails, events} : ListProps) => {
  return (
    <>
    {events.map((event, index) => (
      <CardListEvent key={index} join={handleDetails} event={event}/>
    ))}
    </>
  )
}

export const ListSearched = ({navigation}: RouteType) => {

  const handleDetails = () => {
    navigation.navigate('Details')
  }

  const { data: events, isLoading } = useQuery('events', getEvents)

  return (
    <S.ScrollPage>
      <S.Container>
        <S.Header>
          <S.Title>
            Resultado da busca
          </S.Title>
        </S.Header>
        {!isLoading &&
          <List handleDetails={handleDetails} events={events as EventType[]}/>
        }
      </S.Container>
    </S.ScrollPage>
  )
}
