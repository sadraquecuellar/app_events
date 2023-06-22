import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

export const DetailsEvent = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Button>
            <AntDesign name="left" size={22} color="#000" />
          </S.Button>
          <S.Title>Detalhes do evento</S.Title>
          <AntDesign name="left" size={24} color="#fff" />
        </S.Header>
        <S.Image source={{uri: 'https://media.seudinheiro.com/uploads/2023/03/Lollapalooza-Brasil-2022_divulgacao_-e1679498840676.jpg'}} />
      </S.Content>
    </S.Container>
  )
}
