import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Filters } from '../../components/Filters';
import { useFilters } from '../../hooks/useFilters';
import { RouteType } from '../../types/RouteType';
import * as S from './styles';

export const Search = ({navigation}: RouteType ) => {

  const { search, minPrice, maxPrice, uf, month, category } = useFilters()

  const onSearch = async () => {    
    //  get in route with filters
    const url = `/events?search=${search}&minPrice=${minPrice}&maxPrice${maxPrice}&uf=${uf}&month=${month}&category=${category}`
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
    </S.Container>
  )
}

