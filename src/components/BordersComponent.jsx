import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'



export const BordersComponent = () => {
    const borders = [   
        'border', 
        'borderTop', 
        'borderRight', 
        'borderBottom',
        'borderLeft' 
    ]
   
    const colors = [ {color:'primary.main', type:'Primary'},{color:'secondary.main',type:'Secondary'},
                     {color:'error.main',type:'Error'},{color:'grey.500',type:'Grey'},{color:'text.main',type:'Text'}]

    const [ state , setState ] = useState('border')
    
    const [colorValue, setColorValue] = useState('text.main')

    const [ res , setRes ] = useState({[state]:2})

    const [ colo, setColo] = useState({bgcolor:'primary.main'})    
    
    useEffect(()=>{

            setRes({[state]:2})
      
    },[state])
    
    useEffect(()=>{

        setColo({'bgcolor':colorValue})
      
    },[colorValue])
    

    const handleChange = ({target}) => {
        
        setState(target.value);
        
    };


    return (

    <Box width='25%' display='flex' sx={{...res , ...colo }}
         flexDirection={'column'} padding={4}  >
   
        <Typography variant="h5" pb={2}>Borders </Typography>

        <FormControl >
        
        <InputLabel id="demo-simple-select-label">Brdr</InputLabel>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Age"
          onChange={handleChange}
        >
          {

            borders.map( ( item, i ) => <MenuItem key={i} value={item}>{item}</MenuItem> )
          
          }  
        </Select>
      </FormControl>

      <FormControl sx={{py:2}}  >
      <FormLabel id="demo-radio-buttons-group-label">Colors</FormLabel>
      <RadioGroup onChange={(e)=>setColorValue(e.target.value)}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={"text.main"}
      
        name="radio-buttons-group"
      >
        {
            colors.map( (item,i) => <FormControlLabel value={item.color} key={i} control={<Radio />} label={item.type}  /> )
        }

      </RadioGroup>
    </FormControl>
       
    
        <Typography></Typography>
    
    </Box>
  )
}
