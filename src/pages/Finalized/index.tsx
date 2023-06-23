import React from 'react';
import Lottie from 'lottie-react-native';

import { RouteType } from '../../types/RouteType';
import * as S from './styles';

export const Finalized = ({navigation}:RouteType) => {

  const handleHome = ()=>{
    navigation.navigate('HomeScreen')
  }

  return (
    <S.SafeAreaView>
      <S.Container>
        <S.Header>
            <S.Image source={require('../../../assets/images/logo.png')} />
        </S.Header>
        <S.Content>
          <S.ContainerLottie>
            <Lottie
              loop={false}
              autoPlay
              style={{flex: 1}}
              source={require('../../../assets/lottie/success.json')}
            />
          </S.ContainerLottie>
          <S.TextPrimary>R$ 504,00</S.TextPrimary>
          <S.TextSecondary>Pagamento feito com sucesso!</S.TextSecondary>
          <S.TextTertiary>
            Parabéns seu pagamento foi realizado com sucesso.
          </S.TextTertiary>
        </S.Content>
        <S.Footer>
          <S.ButtonJoin activeOpacity={0.7} onPress={handleHome}>
            <S.TextButtonJoin>
              Voltar para home
            </S.TextButtonJoin>
          </S.ButtonJoin>
        </S.Footer>
      </S.Container>
    </S.SafeAreaView>
  )
}

