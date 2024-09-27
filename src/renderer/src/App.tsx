import { ThemeProvider } from './components/theme-provider'

import Router from './router'

function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
    </ThemeProvider>
  )
}

export default App
