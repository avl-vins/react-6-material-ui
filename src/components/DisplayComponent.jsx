import { Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"


export const DisplayComponent = () => {
  return (
    <Box border={2} width="100%"  p={4}   >
        <Typography variant="h5" align="center" >Display</Typography>
        <Box sx={{ bgcolor:'primary.main', p:2, textAlign:"center", borderRadius:2, display:{sm:"none"} }}>xs</Box>
        <Box sx={{ bgcolor:'secondary.main', textAlign:"center", p:2, borderRadius:2 , display:{xs:"none",sm:'block',md:'none'}}} >sm</Box>
        <Box sx={{ bgcolor:grey[500], p:2, textAlign:'center', borderRadius:2, display:{ xs:'none', ms:'none', md:"block",lg:"none"}}} >md</Box>
        <Box sx={{bgcolor:'error.main',p:2,borderRadius:2, textAlign:'center',display:{xs:"none",sm:'none',md:"none",lg:'inline',xl:'none'}}} >lg</Box>
        <Box sx={{bgcolor:'skyblue', p:2,textAlign:"center",borderRadius:2, display:{xs:"none",xl:'block'}}} >xl</Box>

    </Box>
  )
}
