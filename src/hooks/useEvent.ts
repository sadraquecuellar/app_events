import  {useContext } from 'react';
import { EventContext } from '../context/eventContext';

export const useEvent= () => useContext(EventContext)