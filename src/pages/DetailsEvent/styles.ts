import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;
export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;
export const Header = styled.View`
  width: 100%;
  padding: 0;
  padding-top: ${()=> Platform.OS === 'android' ? '40px' : '0px'} ;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Nunito_700Bold';
`;

export const Button = styled.TouchableOpacity`
`;
export const Image = styled.Image`
  width: 100%;
  height: 40%;
  border-radius:15px;
`;