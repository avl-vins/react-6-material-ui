import { useState } from "react"
import { ProviderTheme } from "./theme/ProviderTheme"
import { Box, Grid2, Typography } from "@mui/material"
import { Grid2 as Grid } from "@mui/material"
import { BordersComponent } from "./components/BordersComponent"
import { DisplayComponent } from "./components/DisplayComponent"
import { OverflowComponent } from "./components/OverflowComponent"
import { ShadowComponent } from "./components/ShadowComponent"
import { GridComponent } from "./components/GridComponent"
import { StackComponent } from "./components/StackComponent"


function App() {

  const [ dark, setDark ] = useState(false)
  
  const toggleTheme = () => {
    setDark(!dark)
  }


  return (
    <ProviderTheme dark={dark}>
         <Box display='flex' flexDirection='column' p={2} textAlign='center'>

            <Typography variant="h2"  >Material UI</Typography>
            
            <Box textAlign='right' >
        
                <button onClick={toggleTheme} >{ dark ?  'Dark Mode' : 'Light Mode'}</button>

            </Box>
        </Box>
    <Grid container spacing={4} p={4} justifyContent='center' >
      
   

      <BordersComponent/>
         <DisplayComponent/>
      <OverflowComponent/>
      <ShadowComponent/>
         <GridComponent/>
  <StackComponent/>
     
      </Grid>
    </ProviderTheme>
  )
}

export default App
