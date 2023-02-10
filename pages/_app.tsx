import type { AppProps } from 'next/app'
import { DataProvider } from '../components/DataContext';
import '@picocss/pico';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  ) 
}