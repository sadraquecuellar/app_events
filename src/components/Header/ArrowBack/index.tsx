import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';
import { NavigationProp } from '@react-navigation/native';

interface ArrowBackProps {
  navigation: NavigationProp<any,any>,
  goTo: string
}

export const ArrowBack = ({navigation, goTo}:ArrowBackProps) => { 
  return (
    <S.Container onPress={() => navigation.navigate(`${goTo}`)}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </S.Container>
  )
}
