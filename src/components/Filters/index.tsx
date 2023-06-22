import React, {useState} from 'react';
import {useQuery} from 'react-query';

import { getCategories, getMonths, getUfs } from '../../api-mock/api-mock';

import { Price } from './Price';
import { SearchInput } from '../SearchInput';
import { Months } from './Months';
import { Location } from './Location';
import { Categories } from './Categories';

import * as S from './styles';

export const Filters = () => {
  const [clearFilters, setClearFilter] = useState(false)

  const { data: dataUf, isLoading: ufLoading } = useQuery('ufs', getUfs)
  const { data: dataMonth, isLoading: monthLoading } = useQuery('months', getMonths)
  const { data: dataCategory, isLoading: categoriesLoading } = useQuery('categories', getCategories)

  return (
    <S.Container>
      <SearchInput/>
      <Price clearFilters={clearFilters} />
      <Months months={!monthLoading && dataMonth || [{ value: '', label: ''}]} clearFilters={clearFilters}/>
      <Location ufs={!ufLoading && dataUf || [{ value: '', label: ''}]} clearFilters={clearFilters}/>
      <Categories categories={!categoriesLoading && dataCategory || [{ value: '', label: ''}]} clearFilters={clearFilters}/>
      <S.Row>
        <S.ButtonSearch activeOpacity={0.7}>
          <S.TextButton>
            Buscar
          </S.TextButton>
        </S.ButtonSearch>
      </S.Row>
      <S.Row>
        <S.ButtonClear activeOpacity={0.7} onPress={()=> setClearFilter(true)}>
          <S.TextClear>
            Limpar filtros
          </S.TextClear>
        </S.ButtonClear>
      </S.Row>
    </S.Container>
  )
}
