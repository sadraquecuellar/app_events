import React from 'react';
import {StyleSheet} from 'react-native';

import * as S from './styles';

const Participants = () => {
  const person1 = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
  const person2 = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg'
  const person3 = 'https://br.web.img3.acsta.net/c_310_420/pictures/18/06/29/00/35/0101925.jpg'

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
    }
  });

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

export const FeatureCard = () => {
 
  return (
    <S.Container>
      <S.ContainerImageCard>
         <S.ImageCard 
          source={{
            uri: 'https://media.seudinheiro.com/uploads/2023/03/Lollapalooza-Brasil-2022_divulgacao_-e1679498840676.jpg',
          }}
        />
        <S.DetailsImageCard>
          <S.TextDetailsPrimary>Lollapalooza - Festival de música</S.TextDetailsPrimary>
          <S.TextDetailsSecondary>Quinta-feira , 3 de agosto</S.TextDetailsSecondary>
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
