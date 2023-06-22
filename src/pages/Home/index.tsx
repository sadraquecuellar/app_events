import React from 'react';

import { FeaturedEvent } from '../../components/FeaturedEvent';
import { ListEvents } from '../../components/ListEvents';
import { SafeAreaView } from 'react-native';

import * as S from './styles';

export const Home = () => {
  return (
    <SafeAreaView>
      <S.ScrollPage showsVerticalScrollIndicator={false}>
        <S.Container>
          <FeaturedEvent/>
          <ListEvents/>
        </S.Container>
      </S.ScrollPage>
    </SafeAreaView>
  )
}
