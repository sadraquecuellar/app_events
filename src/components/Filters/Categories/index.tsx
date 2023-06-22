import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import * as S from '../styles';

interface CategoriesProps {
  categories: Array<{value: string, label: string}>,
  clearFilters: boolean 
}
export const Categories = ({categories, clearFilters}: CategoriesProps) =>{
  const [value, setValue] = useState('');

  useEffect(()=>{
    if(clearFilters){
      setValue('')
    }
  },[clearFilters])
  
  return (
    <>
    <S.Title>Categoria</S.Title>
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
      placeholder={'Selecione a categoria...'}
      value={value}
      onChange={item => {
        setValue(item.value)
      }}
    />
    </>
  )
}
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