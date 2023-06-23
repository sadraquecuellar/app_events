import React from 'react';
import { render } from '@testing-library/react-native';
import { FeatureCard } from '../index'

const eventMock = {
  image: 'https://media.seudinheiro.com/uploads/2023/03/Lollapalooza-Brasil-2022_divulgacao_-e1679498840676.jpg',
  title: 'Lollapalooza',
  date: '03 de agosto',
  hour: '16h',
  location: 'Campo Grande - MS'
}
describe('FeatureCard', () => {
  it('the component rendered', ()=>{
    render(<FeatureCard event={eventMock} join={()=>{}}   />)
  })
  describe('the prop event was passed',()=>{
    it('show the url image', ()=>{
      const {getByTestId} = render(<FeatureCard event={eventMock} join={()=>{}}  />)
       
      const element = getByTestId('imageFeatureCard');
  
      expect(element).toBeTruthy();
    })
    it('show the title', ()=>{
      const {getByText} = render(<FeatureCard event={eventMock} join={()=>{}}  />)
       
      const element = getByText('Lollapalooza');
  
      expect(element).toBeTruthy();
    })
    it('show the date', ()=>{
      const {getByText} = render(<FeatureCard event={eventMock} join={()=>{}}  />)
       
      const element = getByText('03 de agosto');
  
      expect(element).toBeTruthy();
    })
  })
})

