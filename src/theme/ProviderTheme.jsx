import { CssBaseline, ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from "./themes"

export const ProviderTheme = ({ children ,dark }) => {
 

  
  return (

    <ThemeProvider  theme={ dark ? darkTheme : lightTheme }  >

      <CssBaseline/>
    
      {children}
    
    </ThemeProvider>

  )
}
