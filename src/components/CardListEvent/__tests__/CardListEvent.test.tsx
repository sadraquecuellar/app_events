import React from 'react';
import { render } from '@testing-library/react-native';
import { CardListEvent } from '../index'

const eventMock = {
  image: 'https://media.seudinheiro.com/uploads/2023/03/Lollapalooza-Brasil-2022_divulgacao_-e1679498840676.jpg',
  title: 'Lollapalooza',
  date: '03 de agosto',
  hour: '16h',
  location: 'Campo Grande - MS'
}
describe('CarListEvent', () => {
  it('the component rendered', ()=>{
    render(<CardListEvent event={eventMock} join={()=>{}}  />)
  })
  describe('the prop event was passed',()=>{
    it('show the url image', ()=>{
      const {getByTestId} = render(<CardListEvent event={eventMock} join={()=>{}}  />)
       
      const element = getByTestId('imageCardListEvent');
  
      expect(element).toBeTruthy();
    })
    it('show the title', ()=>{
      const {getByText} = render(<CardListEvent event={eventMock} join={()=>{}}  />)
       
      const element = getByText('Lollapalooza');
  
      expect(element).toBeTruthy();
    })
    it('show the location', ()=>{
      const {getByText} = render(<CardListEvent event={eventMock} join={()=>{}}  />)
       
      const element = getByText('Campo Grande - MS');
  
      expect(element).toBeTruthy();
    })
  })
})

