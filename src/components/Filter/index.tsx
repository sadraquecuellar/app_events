import React, {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import { Dropdown } from 'react-native-element-dropdown';

import { getCategories, getMonths, getUfs } from '../../api-mock/api-mock';

import * as S from './styles';

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop:10
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 15,
    color: '#999'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius:15
  },
  containerStyle: {
    marginTop:Platform.OS === 'android'  ? 15 : 0,
    borderRadius:15
  },
});

interface MonthsProps {
  months: Array<{value: string, label: string}>
}
const Months = ({months}:MonthsProps) =>{
  const [value, setValue] = useState('');
  
  return (
    <>
    <S.Title>Selecione um mês</S.Title>
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      containerStyle={styles.containerStyle}
      iconStyle={styles.iconStyle}
      data={months}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={'Selecione...'}
      value={value}
      onChange={item => {
        setValue(item.value)
      }}
    />
    </>
  )
}

interface CategoriesProps {
  categories: Array<{value: string, label: string}>
}
const Categories = ({categories}: CategoriesProps) =>{
  const [value, setValue] = useState('');
  
  return (
    <>
    <S.Title>Selecione uma categoria</S.Title>
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      containerStyle={styles.containerStyle}
      iconStyle={styles.iconStyle}
      data={categories}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={'Selecione...'}
      value={value}
      onChange={item => {
        setValue(item.value)
      }}
    />
    </>
  )
}

interface LocationProps {
  ufs: {value: string, label: string}[]
}
const Location = ({ufs}:LocationProps) =>{
  const [value, setValue] = useState('');
  
  return (
    <>
    <S.Title>Selecione um estado</S.Title>
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      containerStyle={styles.containerStyle}
      iconStyle={styles.iconStyle}
      data={ufs}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={'Selecione...'}
      searchPlaceholder="ex. Mato Grosso do Sul"
      value={value}
      onChange={item => {
        setValue(item.value)
      }}
    />
    </>
  )  
}

export const Filter = () => {
  const { data: dataUf, isLoading: ufLoading } = useQuery('ufs', getUfs)
  const { data: dataMonth, isLoading: monthLoading } = useQuery('months', getMonths)
  const { data: dataCategory, isLoading: categoriesLoading } = useQuery('categories', getCategories)

  return (
    <S.Container>
      <Months months={!monthLoading && dataMonth || [{ value: '', label: ''}]}/>
      <Location ufs={!ufLoading && dataUf || [{ value: '', label: ''}]}/>
      <Categories categories={!categoriesLoading && dataCategory || [{ value: '', label: ''}]}/>
      <S.Row>
        <S.ButtonSearch activeOpacity={0.7}>
          <S.TextButton>
            Buscar
          </S.TextButton>
        </S.ButtonSearch>
      </S.Row>
      <S.Row>
        <S.ButtonClear activeOpacity={0.7}>
          <S.TextClear>
            Limpar filtros
          </S.TextClear>
        </S.ButtonClear>
      </S.Row>
    </S.Container>
  )
}
