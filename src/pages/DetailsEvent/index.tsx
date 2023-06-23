import React, { useState } from 'react';

import * as S from './styles';
import { RouteType } from '../../types/RouteType';
import { useEvent } from '../../hooks/useEvent';

export const DetailsEvent = ({navigation}: RouteType) => {

  const {event} = useEvent()

  const handleCheckout = () =>{
    navigation.navigate('Checkout')
  }

  return (
    <S.Container>
      <S.Content>
        <S.Image source={{uri: event?.image}} />
        <S.Details>
          <S.BoxTextDetails>
            <S.TextPrimary>
              {event?.title}
            </S.TextPrimary>
            <S.TextSecondary>
                {event?.date} - {event?.hour}
            </S.TextSecondary>
          </S.BoxTextDetails>
          <S.BoxPriceDetails>
            <S.Price>
              <S.TextPrice>
                R$ 500
              </S.TextPrice>
            </S.Price>
          </S.BoxPriceDetails>
        </S.Details>
        <S.BoxDescriptionDetails>
          <S.TextDescriptionPrimary>
            Descrição
          </S.TextDescriptionPrimary>
          <S.TextDescriptionSecondary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore praesentium dolores rerum ipsa totam reprehenderit reiciendis non dolore dignissimos ut voluptate magnam unde neque laborum sint vitae, blanditiis ipsum.
          </S.TextDescriptionSecondary>
        </S.BoxDescriptionDetails>
      </S.Content>
      <S.Footer>
        <S.ButtonJoin activeOpacity={0.7} onPress={()=> handleCheckout()}>
          <S.TextButtonJoin>
            Comprar agora
          </S.TextButtonJoin>
        </S.ButtonJoin>
      </S.Footer>
    </S.Container>
  )
}
