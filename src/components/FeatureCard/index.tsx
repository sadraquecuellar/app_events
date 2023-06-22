import React from 'react';
import {StyleSheet} from 'react-native';

import * as S from './styles';

const style = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  boxShadow2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }
});

const Participants = () => {
  const person1 = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
  const person2 = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg'
  const person3 = 'https://br.web.img3.acsta.net/c_310_420/pictures/18/06/29/00/35/0101925.jpg'

  return(
    <S.ContainerParticipants>
      <S.ContainerPeople>
        <S.CirclePeople style={style.boxShadow} left={'0px'}>
          <S.ImagePeople source={{uri: person1}}/>
        </S.CirclePeople>
        <S.CirclePeople style={style.boxShadow} left={'15px'}>
          <S.ImagePeople source={{uri: person2}}/>
        </S.CirclePeople>
        <S.CirclePeople style={style.boxShadow} left={'30px'}>
          <S.ImagePeople source={{uri: person3}}/>
        </S.CirclePeople>
      </S.ContainerPeople>
      <S.BoxNumber>
        <S.TextBoxNumber>
          +83K
        </S.TextBoxNumber>
      </S.BoxNumber>
    </S.ContainerParticipants>
  )
}

interface FeatureCardProps {
  image: string,
  title: string,
  date: string
}

export const FeatureCard = ({image, title, date}:FeatureCardProps) => {
 
  return (
    <S.Container style={style.boxShadow2}>
      <S.ContainerImageCard>
         <S.ImageCard 
          source={{
            uri: image,
          }}
        />
        <S.DetailsImageCard>
          <S.TextDetailsPrimary>{title}</S.TextDetailsPrimary>
          <S.TextDetailsSecondary>{date}</S.TextDetailsSecondary>
        </S.DetailsImageCard>
      </S.ContainerImageCard>
      <S.Details>
        <Participants/>
        <S.ButtonJoin activeOpacity={0.7}>
          <S.TextButton>Participar</S.TextButton>
        </S.ButtonJoin>
      </S.Details>
    </S.Container>
  )
}

