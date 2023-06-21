import React from 'react';

import { FeatureCard } from '../FeatureCard';
import { featureEvents } from '../../../data/featureEvents';

import * as S from './styles';

export const FeaturedEvent= () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Destaques
        </S.Title>
      </S.Header>
      <S.CarrouselCards horizontal showsHorizontalScrollIndicator={false}>
        {featureEvents.map((item, index) =>{
          return (
            <FeatureCard key={index} image={item.image} title={item.title} date={item.date} />
          )
        })}
      </S.CarrouselCards>
    </S.Container>
  )
}
