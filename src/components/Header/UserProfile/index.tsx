import React from 'react';
import * as S from './styles';

export const UserProfile = () => {
  const image = '../../../../assets/images/profile.png'
  return (
    <S.Container activeOpacity={0.7}> 
      <S.Image source={require(image)}/>
    </S.Container>
  )
}
