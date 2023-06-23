import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #FFF;
`;
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: #FFF;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 15px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80px;
  height: 60px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 30px;
  align-items: center;
`;
export const ContainerLottie = styled.View`
  width: 200px;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
`;

export const TextPrimary = styled.Text`
  font-size: 50px;
  font-family: 'Nunito_800ExtraBold';
  margin-bottom:40px;
`;

export const TextSecondary = styled.Text`
  font-size: 20px;
  font-family: 'Nunito_700Bold';
  margin-bottom:15px;
`;

export const TextTertiary = styled.Text`
  font-size: 16px;
  font-family: 'Nunito_600SemiBold';
  color: #999;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
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