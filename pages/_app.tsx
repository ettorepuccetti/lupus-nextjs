import type { AppProps } from 'next/app'
import '@picocss/pico';
import { DataProvider } from '../components/DataContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  ) 
}