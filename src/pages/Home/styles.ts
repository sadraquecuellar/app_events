import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const ScrollPage = styled.ScrollView`
  background-color:#F2F2F2;
`;
export const Container = styled(LinearGradient).attrs({
  colors:['#FFF', '#F2F2F2']
})``;
