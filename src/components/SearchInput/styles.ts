import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding: 0px 20px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  border: 1px solid #ccc;
  padding: 0 20px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  width: 5%;
`;

export const Search = styled.TextInput`
  width: 95%;
  padding: 10px;
  padding-top:${() => Platform.OS === 'android' ? '10px' : '15px'};
  padding-bottom:${() => Platform.OS === 'android' ? '10px' : '15px'};
`;
