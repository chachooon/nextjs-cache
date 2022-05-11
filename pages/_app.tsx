import React from 'react';
import { GlobalStyles } from '@/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Theme from '@/styles/Theme';
import { ReactQueryDevtools } from 'react-query/devtools';



function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       retry: false,
  //     },
  //   },
  // });

  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
