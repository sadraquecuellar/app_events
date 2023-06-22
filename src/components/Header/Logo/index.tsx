import React from 'react';
import * as S from './styles';
export const Logo = () => { 
  const image = '../../../../assets/images/logo.png'
  return (
    <S.Container>
      <S.Image source={require(image)}/>
    </S.Container>
  )
}
