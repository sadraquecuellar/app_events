import React from 'react';
import { SafeAreaView } from 'react-native';

import { FeaturedEvent } from '../../components/FeaturedEvent';
import { ListEvents } from '../../components/ListEvents';
import { RouteType } from '../../types/RouteType';

import * as S from './styles';
import { useQuery } from 'react-query';
import { EventType } from '../../types/EventType';
import { getFeaturedEvents, getUpComingEvents } from '../../services/eventsService';

export const Home = ({navigation}: RouteType) => {

  const handleDetails = () => {
    navigation.navigate('Details')
  }

  const { data: upComingEvents, isLoading: upComingEventsEvents } = useQuery('upComingEvents', getUpComingEvents)
  const { data: featuredEvents, isLoading: featuredEventsLoading } = useQuery('featuredEvents', getFeaturedEvents)

  return (
    <SafeAreaView>
      <S.ScrollPage showsVerticalScrollIndicator={false}>
        <S.Container>
          {!featuredEventsLoading && (
            <FeaturedEvent join={handleDetails} events={featuredEvents as EventType[]}/>
          )}
          {!upComingEventsEvents && (
            <ListEvents join={handleDetails} events={upComingEvents as EventType[]} />
          )}
        </S.Container>
      </S.ScrollPage>
    </SafeAreaView>
  )
}
