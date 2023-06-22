import React from 'react';

import * as S from './styles';

export const DetailsEvent = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Image source={{uri: 'https://media.seudinheiro.com/uploads/2023/03/Lollapalooza-Brasil-2022_divulgacao_-e1679498840676.jpg'}} />
        <S.Details>
          <S.BoxTextDetails>
            <S.TextPrimary>
              Rock in Rio
            </S.TextPrimary>
            <S.TextSecondary>
                09 de Dezembro - 16:00 h
            </S.TextSecondary>
          </S.BoxTextDetails>
          <S.BoxPriceDetails>
            <S.Price>
              <S.TextPrice>
                Grátis
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
        <S.ButtonJoin>
          <S.TextButtonJoin>
            Comprar agora
          </S.TextButtonJoin>
        </S.ButtonJoin>
      </S.Footer>
    </S.Container>
  )
}
