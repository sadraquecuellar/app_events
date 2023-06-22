import React from 'react';
import { SafeAreaView } from 'react-native';

import { FeaturedEvent } from '../../components/FeaturedEvent';
import { ListEvents } from '../../components/ListEvents';
import { RouteType } from '../../types/RouteType';

import * as S from './styles';

export const Home = ({navigation}: RouteType) => {

  const handleDetails = () => {
    navigation.navigate('DetailsEvent')
  }

  return (
    <SafeAreaView>
      <S.ScrollPage showsVerticalScrollIndicator={false}>
        <S.Container>
          <FeaturedEvent join={handleDetails}/>
          <ListEvents join={handleDetails} />
        </S.Container>
      </S.ScrollPage>
    </SafeAreaView>
  )
}
