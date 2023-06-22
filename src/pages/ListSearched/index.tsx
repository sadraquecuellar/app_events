import React from 'react';
import { CardListEvent } from '../../components/CardListEvent';
import { RouteType } from '../../types/RouteType';
import * as S from './styles';

export const ListSearched = ({navigation}: RouteType) => {

  const handleDetails = () => {
    navigation.navigate('DetailsEvent')
  }

  return (
    <S.ScrollPage>
      <S.Container>
        <S.Header>
          <S.Title>
            Resultado da busca
          </S.Title>
        </S.Header>
        {[1,2,3,4,5,6,7,8,9].map((i) => (
          <CardListEvent key={i} join={handleDetails} />
        ))}
      </S.Container>
    </S.ScrollPage>
  )
}
