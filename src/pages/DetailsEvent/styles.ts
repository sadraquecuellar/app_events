import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  justify-content: space-between;
`;
export const Content = styled.View`
  flex: 1;
  padding: 10px 20px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: 'Nunito_700Bold';
`;

export const Button = styled.TouchableOpacity`
`;
export const Image = styled.Image`
  width: 100%;
  height: 40%;
  border-radius:15px;
`;
export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`;
export const BoxTextDetails = styled.View`
  width: 70%;
`;

export const TextPrimary = styled.Text`
  font-size: 35px;
  font-family: 'Nunito_800ExtraBold';
`;

export const TextSecondary = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const BoxPriceDetails = styled.View`
  width: 30%;
  align-items: flex-end;
  justify-content: center;
`;

export const Price = styled.View`
  padding: 5px 10px;
  border-radius:20px;
  background-color: #4BB543;
  align-items: center;
  justify-content: center;
`;

export const BoxDescriptionDetails = styled.View`
  width:100%;
  margin-top:15px;
`;

export const TextPrice = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Nunito_700Bold';
`;

export const TextDescriptionPrimary = styled.Text`
  font-size: 16px;
  font-family: 'Nunito_700Bold';
  margin-bottom:5px;
`;

export const TextDescriptionSecondary= styled.Text`
  font-size: 16px;
  color: #999;
  text-align: justify;
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