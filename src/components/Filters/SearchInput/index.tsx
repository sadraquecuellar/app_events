import React, {useState, useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons';

import * as S from './styles';
import { useFilters } from '../../../hooks/useFilters';

interface SearchInputProps {
  clearFilters: boolean;
}
export const SearchInput = ({clearFilters}: SearchInputProps) => {
  const { search, setSearch } = useFilters()

  useEffect(()=>{
    if(clearFilters){
      setSearch('')
    }
  },[clearFilters])

  return (
    <S.Container>
      <S.SearchContainer>
        <S.Icon>
          <FontAwesome name="search" size={16} color="#999" />
        </S.Icon>
        <S.Search testID='searchInput' value={search} onChangeText={setSearch} placeholder="Buscar evento..." clearButtonMode="always" />
      </S.SearchContainer>
    </S.Container>
  )
}
