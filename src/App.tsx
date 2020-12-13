import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import Routes from './routes';
import Colors from './components/colors';

const styles = {
  global: (props: any) => ({
    body: {
      color: mode('#2b2a2a', 'whiteAlpha.900')(props),
      bg: mode('#D9ADAA', Colors.second)(props),
      footer: mode('#fff', Colors.third)(props),
    },
  }),
};

const theme = extendTheme({ styles });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
