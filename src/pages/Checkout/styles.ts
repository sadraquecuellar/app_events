import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;
export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 5px 20px 0 20px;
  justify-content: space-between;
`;

export const Content  = styled.View`
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Nunito_700Bold';
`;

export const Card = styled.View`
  width: 100%;
  background: #fff;
  border-radius:15px;
  padding: 20px 20px 10px 20px;
  margin: 10px 0;
`;

export const TextPrimary = styled.Text`
  font-size: 18px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 10px;
`;

export const TextSecondary = styled.Text`
  font-size: 16px;
  color: #999;
  font-family: 'Nunito_700Bold';
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  font-family: 'Nunito_700Bold';
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.View`
  width: 45%;
`;
export const BoxRight = styled.View`
  width: 45%;
  align-items: flex-end;
`;

export const Divisor = styled.View`
  width: 100%;
  height: 1px;
  background-color:#ccc;
  margin: 5px 0;
`;

export const TextSummaryPrimary = styled.Text`
  font-size: 14px;
  font-family: 'Nunito_600SemiBold';
  margin-bottom: 5px;
`;
export const TextSummarySecondary = styled.Text`
  font-size: 14px;
  color: #999;
  font-family: 'Nunito_600SemiBold';
  margin-bottom: 5px;
`;

export const Footer= styled.View`
width:100%;
align-items: center;
margin-bottom:20px;
`;

export const ButtonJoin= styled.TouchableOpacity`
width:80%;
height: 50px;
border-radius: 25px;
align-items:center;
justify-content: center;
background-color: #DB1E99;
`;

export const TextButtonJoin= styled.Text`
font-size: 20px;
color: #fff;
font-family: 'Nunito_700Bold';
`;