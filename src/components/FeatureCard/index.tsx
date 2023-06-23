import React from 'react';
import {StyleSheet} from 'react-native';

import { useEvent } from '../../hooks/useEvent';
import { EventType } from '../../types/EventType';

import * as S from './styles';

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
  event: EventType
  join: ()=> void
}

export const FeatureCard = ({event, join}:FeatureCardProps) => {
 
  const {} = useEvent()

  const handleClick = () =>{

  }

  return (
    <S.Container style={style.boxShadow2} activeOpacity={0.2} onPress={join}>
      <S.ContainerImageCard>
         <S.ImageCard 
          source={{
            uri: event?.image,
          }}
        />
        <S.DetailsImageCard>
          <S.TextDetailsPrimary>{event?.title}</S.TextDetailsPrimary>
          <S.TextDetailsSecondary>{event?.date}</S.TextDetailsSecondary>
        </S.DetailsImageCard>
      </S.ContainerImageCard>
      <S.Details>
        <Participants/>
        <S.ButtonJoin activeOpacity={0.7} onPress={join}>
          <S.TextButton>Participar</S.TextButton>
        </S.ButtonJoin>
      </S.Details>
    </S.Container>
  )
}

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