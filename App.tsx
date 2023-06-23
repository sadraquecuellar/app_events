import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Routes } from './routes';
import { FiltersProvider } from './src/context/filtersContext';
import { EventProvider } from './src/context/eventContext';

export default function App() {
  const queryClient = new QueryClient()

  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <FiltersProvider>
        <EventProvider>
          <Routes/>
        </EventProvider>
      </FiltersProvider>
    </QueryClientProvider>
  );
}
