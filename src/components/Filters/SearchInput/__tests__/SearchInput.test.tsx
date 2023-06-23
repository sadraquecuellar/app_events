import React from 'react';
import { render } from '@testing-library/react-native';
import { SearchInput } from '../index'

describe('SearchInput', () => {
  it('the component rendered', ()=>{
    const {getByTestId} = render(<SearchInput clearFilters={false}  />)
    const input = getByTestId('searchInput')
    expect(input).toBeTruthy();
  })
})

