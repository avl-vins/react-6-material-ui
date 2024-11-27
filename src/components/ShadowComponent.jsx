import { Box, Typography } from "@mui/material"

export const ShadowComponent = () => {
  return (
    <Box component='section' border={2} width='100%' p={4} >
    <Typography variant="h4" textAlign='center' py={2} >BoxShadow</Typography>
        
        <Box display='flex' flexDirection="row" flexWrap='wrap' gap={2} justifyContent='center' >
        <Box component="div" padding={4} borderColor='none' borderRadius={2} boxShadow={0} >
            0
        </Box>
        <Box component="div" padding={4} borderColor='none'  borderRadius={2} boxShadow={4}   >
        4
        </Box>
        <Box component="div" padding={4} borderColor='none'  borderRadius={2} boxShadow={8}   >
        8
        </Box>
        <Box component="div" padding={4} borderColor='none'  borderRadius={2} boxShadow={12}   >
        12
        </Box>
        </Box>
        
    </Box>
  )
}
