import React, {useEffect, useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as S from '../styles';

interface PriceProps {
  clearFilters: boolean
}
export const Price = ({clearFilters}:PriceProps) =>{  
  const [minValue, setMinValue] = useState('')
  const [maxValue, setMaxValue] = useState('')

  useEffect(()=>{
    if(clearFilters){
      setMinValue('')
      setMaxValue('')
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
        <S.Search value={minValue} keyboardType='numeric' returnKeyType='done' placeholder="Valor mínimo" onChangeText={(e)=> setMinValue(e.replace(/[^0-9]/g, ''))} clearButtonMode="always" />
      </S.SearchContainer>
      <S.SearchContainer>
        <S.Icon>
          <MaterialCommunityIcons name="currency-brl" size={16} color="#999" />
        </S.Icon>
        <S.Search value={maxValue} keyboardType='numeric' returnKeyType="done" placeholder="Valor máximo"  onChangeText={(e)=> setMaxValue(e.replace(/[^0-9]/g, ''))}  clearButtonMode="always" />
      </S.SearchContainer>
    </S.LineInputs>
    </>
  )
}