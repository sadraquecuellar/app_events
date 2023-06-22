import  {useContext } from 'react';
import { FiltersContext } from '../context/filtersContext';

export const useFilters= () => useContext(FiltersContext)