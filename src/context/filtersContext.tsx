import React, { createContext, useState, ReactNode } from 'react';

interface FiltersContextData {
  search: string;
  setSearch: (value: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  uf: string;
  setUf: (value: string) => void;
  month: string;
  setMonth: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

export const FiltersContext = createContext<FiltersContextData>({
  search: '',
  setSearch: () => {},
  minPrice: '',
  setMinPrice: () => {},
  maxPrice: '',
  setMaxPrice: () => {},
  uf: '',
  setUf: () => {},
  month: '',
  setMonth: () => {},
  category: '',
  setCategory: () => {},
});

type FiltersProviderProps = {
  children: ReactNode
}

export const FiltersProvider=  ({ children }:FiltersProviderProps) => {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [uf, setUf] = useState('');
  const [month, setMonth] = useState('');
  const [category, setCategory] = useState('');

  return (
    <FiltersContext.Provider
      value={{
        search,
        setSearch,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        uf,
        setUf,
        month,
        setMonth,
        category,
        setCategory,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
