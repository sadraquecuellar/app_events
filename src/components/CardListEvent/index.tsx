import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

export const CardListEvent = () => {
  return (
    <S.Container activeOpacity={0.7}>
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
