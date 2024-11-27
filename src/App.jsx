import { useState } from "react"
import { ProviderTheme } from "./theme/ProviderTheme"
import { Box, Typography } from "@mui/material"
import { BordersComponent } from "./components/BordersComponent"
import { DisplayComponent } from "./components/DisplayComponent"
import { OverflowComponent } from "./components/OverflowComponent"
import { ShadowComponent } from "./components/ShadowComponent"


function App() {

  const [ dark, setDark ] = useState(false)
  
  const toggleTheme = () => {
    setDark(!dark)
  }


  return (
    <ProviderTheme dark={dark}>

      
      <Box  height={'100%'} width={'100vw'} p={4} 
            display={"flex"} flexDirection={"column"} 
            alignItems={"center"}  gap={4} >

        <Typography variant="h2"  >Material UI</Typography>
        <Box textAlign={"right"} >
          
        <button onClick={toggleTheme} >{ dark ?  'Dark Mode' : 'Light Mode'}</button>

        </Box>
        <BordersComponent/>
        <DisplayComponent/>
        <OverflowComponent/>
        <ShadowComponent/>
        
        

        
      </Box>

     

    </ProviderTheme>
  )
}

export default App
