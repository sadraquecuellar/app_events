import React from 'react';

import * as S from './styles';

import { CardListEvent } from '../../components/CardListEvent';
import { Filters } from '../../components/Filters';

export const Search = (props: any ) => {
  
  const {navigation} = props;

  const onSearch = () => {
    navigation.navigate('ListSearched')
  }


  return (
      <S.Container>
        <S.Header>
          <S.Title>
            Buscar evento
          </S.Title>
        </S.Header>
        <Filters onSearch={onSearch}/>
        {/* <S.Events>
          <CardListEvent />
          <CardListEvent />
        </S.Events> */}
      </S.Container>
  )
}
