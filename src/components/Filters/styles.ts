import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 300px;
  padding: 10px 20px;
`;

export const Title = styled.Text`
  font-size:16px;
  font-family:'Nunito_700Bold';
`;

export const Row = styled.View`
  width: 100%;
  align-items: center;
  margin: 5px 0;
`;
export const ButtonSearch = styled.TouchableOpacity`
  width: 180px;
  height: 50px;
  margin-top:10px;
  border-radius: 10px;
  background-color:#DB1E99 ;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size:18px;
  font-family:'Nunito_700Bold';
  color: #fff;
`;

export const ButtonClear = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color:#fff;
  align-items: center;
  justify-content: center;
`;

export const TextClear = styled.Text`
  font-size:16px;
  font-family:'Nunito_700Bold';
  color: #999;
`;

export const LineInputs = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin:10px 0;
`;

export const SearchContainer = styled.View`
  width: 45%;
  border: 1px solid #ccc;
  padding: 0 10px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  width: 15%;
`;

export const Search = styled.TextInput`
  width: 85%;
  padding: 10px;
  padding-top:${() => Platform.OS === 'android' ? '10px' : '15px'};
  padding-bottom:${() => Platform.OS === 'android' ? '10px' : '15px'};
`;
