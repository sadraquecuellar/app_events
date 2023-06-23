import React from 'react';

import { FeatureCard } from '../FeatureCard';

import { EventType } from '../../types/EventType';

import * as S from './styles';

interface FeaturedEventProps {
  join: () => void
  events: EventType[]
}

export const FeaturedEvent= ({join, events}: FeaturedEventProps) => {

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Destaques
        </S.Title>
      </S.Header>
      <S.CarrouselCards horizontal showsHorizontalScrollIndicator={false}>
        {events.map((event, index) =>{
          return (
            <FeatureCard key={index} event={event} join={join} />
          )
        })}
      </S.CarrouselCards>
    </S.Container>
  )
}
