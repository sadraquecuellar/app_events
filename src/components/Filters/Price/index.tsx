import React, {useEffect, useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as S from '../styles';
import { useFilters } from '../../../hooks/useFilters';

interface PriceProps {
  clearFilters: boolean
}
export const Price = ({clearFilters}:PriceProps) =>{  
  const { minPrice, setMinPrice, maxPrice, setMaxPrice} = useFilters()

  useEffect(()=>{
    if(clearFilters){
      setMinPrice('')
      setMaxPrice('')
    }
  },[clearFilters])

  return (
    <>
    <S.Title>Faixa de preço</S.Title>
    <S.LineInputs>
      <S.SearchContainer>
        <S.Icon>
          <MaterialCommunityIcons name="currency-brl" size={16} color="#999" />
        </S.Icon>
        <S.Search value={minPrice} keyboardType='numeric' returnKeyType='done' placeholder="Valor mínimo" onChangeText={(e)=> setMinPrice(e.replace(/[^0-9]/g, ''))} clearButtonMode="always" />
      </S.SearchContainer>
      <S.SearchContainer>
        <S.Icon>
          <MaterialCommunityIcons name="currency-brl" size={16} color="#999" />
        </S.Icon>
        <S.Search value={maxPrice} keyboardType='numeric' returnKeyType="done" placeholder="Valor máximo"  onChangeText={(e)=> setMaxPrice(e.replace(/[^0-9]/g, ''))}  clearButtonMode="always" />
      </S.SearchContainer>
    </S.LineInputs>
    </>
  )
}