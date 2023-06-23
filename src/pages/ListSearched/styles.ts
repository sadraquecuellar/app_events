import styled from 'styled-components/native';

export const ScrollPage = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  background: #FFF;
`;
export const Container = styled.View`
  flex: 1;
  background: #FFF;
  padding:20px;
  padding-bottom:40px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 0 20px 0;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Nunito_700Bold';
`;