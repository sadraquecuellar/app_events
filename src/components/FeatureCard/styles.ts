import styled from 'styled-components/native';

export const Container = styled.View`
  width: 280px;
  height: 260px;
  background: #fff;
  border-radius:15px;
  margin: 0 10px;
  padding: 15px 10px;
`;

export const ContainerImageCard = styled.View`
  width: 100%;
  height: 82%;
  border-radius: 15px;
  position: relative;
`;

export const ImageCard = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
  top:0;
  bottom:0;
  left: 0;
  right: 0;
`;

export const DetailsImageCard = styled.View`
  width: 100%;
  height: 60px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: absolute;
  bottom: 0;
`;

export const Details = styled.View`
  width: 100%;
  height: 18%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ButtonJoin = styled.TouchableOpacity`
  width: 100px;
  padding: 5px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: #DB1E99;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-family: 'Nunito_600SemiBold';
  color: #FFF;
`;

export const TextDetailsPrimary = styled.Text`
  font-size: 14px;
  font-family: 'Nunito_800ExtraBold';
  color: #FFF;
`;

export const TextDetailsSecondary = styled.Text`
  font-size: 14px;
  font-family: 'Nunito_600SemiBold';
  color: #FFF;
`;

export const ContainerParticipants= styled.View`
  flex-direction: row;
  align-items: flex-end;
  width: 50%;
  height: 100%;
`;
export const ContainerPeople = styled.View`
  flex-direction: row;
  width: 50%;
  height: 100%;
  position: relative;
`;

interface CirclePeopleProps {
  left: string;
}

export const CirclePeople = styled.View<CirclePeopleProps>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom:0;
  left: ${props => props.left};
`;

export const ImagePeople = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  align-items: center;
  justify-content: center;
`;

export const BoxNumber = styled.View`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background: #ccffe6;
`;

export const TextBoxNumber = styled.Text`
  font-size: 14px;
  font-family: 'Nunito_600SemiBold';
  color: #47d147;
`;
