import React from 'react';
import { View } from 'react-native';

import * as S from './styles';
import { FeatureCard } from '../FeatureCard';

export const FeaturedEvent= () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Destaques
        </S.Title>
      </S.Header>
      <S.CarrouselCards horizontal showsHorizontalScrollIndicator={false}>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
      </S.CarrouselCards>
    </S.Container>
  )
}
