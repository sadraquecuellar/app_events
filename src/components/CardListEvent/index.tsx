import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }
});

type CardListEventType = {
  join: () => void
}

export const CardListEvent = ({join}: CardListEventType) => {
  return (
    <S.Container style={style.boxShadow} activeOpacity={0.7} onPress={join}>
        <S.Image source={{uri: 'https://gerenciador.popload.com.br/wp-content/uploads/2015/01/220115_acdc2.jpg' }}/>
        <S.Details>
          <S.TextSecondary>
            Rio de Janeiro, RJ
          </S.TextSecondary>
          <S.TextPrimary>
            AC/DC
          </S.TextPrimary>
        </S.Details>
        <S.Button>
          <AntDesign name="right" size={24} color="#999" />
        </S.Button>
    </S.Container>
  )
}
