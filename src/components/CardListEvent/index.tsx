import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';
import { EventType } from '../../types/EventType';

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
  join: () => void,
  event: EventType
}

export const CardListEvent = ({join, event}: CardListEventType) => {
  return (
    <S.Container style={style.boxShadow} activeOpacity={0.7} onPress={join}>
        <S.Image source={{uri: event?.image }}/>
        <S.Details>
          <S.TextSecondary>
            {event?.location}
          </S.TextSecondary>
          <S.TextPrimary>
            {event?.title}
          </S.TextPrimary>
        </S.Details>
        <S.Button>
          <AntDesign name="right" size={24} color="#999" />
        </S.Button>
    </S.Container>
  )
}
