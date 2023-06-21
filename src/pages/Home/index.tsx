import React from 'react';

import { SearchInput } from '../../components/SearchInput';

import * as S from './styles';
import { FeaturedEvent } from '../../components/FeaturedEvent';
import { ListEvents } from '../../components/ListEvents';
import { SafeAreaView } from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView>
      <S.Container showsVerticalScrollIndicator={false}>
        {/* <SearchInput/> */}
        <FeaturedEvent/>
        <ListEvents/>
      </S.Container>
    </SafeAreaView>
  )
}
