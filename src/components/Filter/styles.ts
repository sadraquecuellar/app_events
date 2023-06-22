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