import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { Home } from './pages/Home'


export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}