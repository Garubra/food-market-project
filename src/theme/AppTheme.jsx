import { ThemeProvider } from "@emotion/react"
import CssBaseline from '@mui/material/CssBaseline';
import { FooterTheam } from "./FooterTheam";


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ FooterTheam }>
    <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
