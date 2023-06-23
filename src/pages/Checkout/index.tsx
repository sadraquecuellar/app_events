import React from 'react';
import {  StyleSheet} from 'react-native';

import { RouteType } from '../../types/RouteType';

import * as S from './styles';

export const Checkout  = ({navigation}: RouteType) => {

  const handleHome = () =>{
    navigation.navigate('Finalized')
  }

  return (
    <S.SafeAreaView>
      <S.Container>
        <S.Content>
          <S.Card style={style.boxShadow}>
            <S.TextPrimary>
              Detalhes do cartão
            </S.TextPrimary>

            <S.TextSecondary>
              Nome no cartão
            </S.TextSecondary>
            <S.Input value={'João da Silva Sousa'} />
            <S.TextSecondary>
              Número do cartão
            </S.TextSecondary>
            <S.Input value={'1234 5678 1234 5678'} />
            <S.Row>
              <S.Box>
                <S.TextSecondary>
                  Data de validade
                </S.TextSecondary>
                <S.Input value={'12/32'} />
              </S.Box>
              <S.Box>
                <S.TextSecondary>
                  CVC
                </S.TextSecondary>
                <S.Input value={'* * *'} />
              </S.Box>
            </S.Row>   
          </S.Card>

          <S.Card style={style.boxShadow}>
            <S.TextPrimary>
              Resumo da compra
            </S.TextPrimary>
            <S.Row>
              {/* <Entypo name="ticket" size={50} color="black" /> */}
              <S.TextSecondary>
                1 x Ingresso Rock in Rio
              </S.TextSecondary>
            </S.Row>
            <S.Divisor/>
            <S.Row>
              <S.Box>
                <S.TextSummarySecondary>
                  Subtotal
                </S.TextSummarySecondary>  
              </S.Box>
              <S.BoxRight>
                <S.TextSummarySecondary>
                  R$ 500,00
                </S.TextSummarySecondary>  
              </S.BoxRight>
            </S.Row>
            <S.Row>
              <S.Box>
                <S.TextSummarySecondary>
                  Taxa de serviço
                </S.TextSummarySecondary>  
              </S.Box>
              <S.BoxRight>
                <S.TextSummarySecondary>
                  R$ 4,60
                </S.TextSummarySecondary>  
              </S.BoxRight>
            </S.Row>
            <S.Row>
              <S.Box>
                <S.TextSummaryPrimary>
                  Total
                </S.TextSummaryPrimary>  
              </S.Box>
              <S.BoxRight>
                <S.TextSummaryPrimary>
                  R$ 504,60
                </S.TextSummaryPrimary>  
              </S.BoxRight>
            </S.Row>
          </S.Card>
        </S.Content>
        <S.Footer>
          <S.ButtonJoin activeOpacity={0.7} onPress={()=> handleHome()} >
            <S.TextButtonJoin>
              Finalizar
            </S.TextButtonJoin>
          </S.ButtonJoin>
        </S.Footer>
      </S.Container>
    </S.SafeAreaView>
  )
}

const style = StyleSheet.create({
  boxShadow: {
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