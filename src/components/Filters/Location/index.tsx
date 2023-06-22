import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import * as S from '../styles';
import { useFilters } from '../../../hooks/useFilters';

interface LocationProps {
  ufs: {value: string, label: string}[],
  clearFilters: boolean 
}
export const Location = ({ufs, clearFilters}:LocationProps) =>{
  const { uf, setUf } = useFilters()

  useEffect(()=>{
    if(clearFilters){
      setUf('')
    }
  },[clearFilters])
  
  return (
    <>
    <S.Title>Estado</S.Title>
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
      placeholder={'Selecione o estado...'}
      searchPlaceholder="ex. Mato Grosso do Sul"
      value={uf}
      onChange={item => {
        setUf(item.value)
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