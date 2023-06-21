import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  border-radius:15px;
  padding:10px;
  background-color:#fff;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Image = styled.Image`
  width: 30%;
  height: 100%;
  border-radius:15px;
  background-color:#fff;
`;

export const Details = styled.View`
  padding: 0 10px;
  width: 50%;
  height: 100%;
  justify-content: center;
`;

export const Button = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const TextPrimary = styled.Text`
  font-size: 18px;
  font-family: 'Nunito_800ExtraBold';
`;

export const TextSecondary = styled.Text`
  font-size: 12px;
  color: #999;
`;
