import React from 'react';

import { FeaturedEvent } from '../../components/FeaturedEvent';
import { ListEvents } from '../../components/ListEvents';
import { SafeAreaView } from 'react-native';

import * as S from './styles';

export const Home = ({navigation}: any) => {

  const handleDetails = () => {
    navigation.navigate('DetailsEvent')
  }

  return (
    <SafeAreaView>
      <S.ScrollPage showsVerticalScrollIndicator={false}>
        <S.Container>
          <FeaturedEvent join={handleDetails}/>
          <ListEvents/>
        </S.Container>
      </S.ScrollPage>
    </SafeAreaView>
  )
}
