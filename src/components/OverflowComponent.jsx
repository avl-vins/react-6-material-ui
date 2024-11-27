import { Box, Typography } from "@mui/material"

export const OverflowComponent = () => {
  return (
    <Box p={2}  height={500} border={2} >

        <Typography variant = "h5"  align="center" p={2} >Overflow</Typography>
      <Box p={2} display='flex' gap={2} flexWrap='wrap' justifyContent='space-around'>
        <Box width='40%' height={200} component='section' border={2} overflow='hidden' >
            <Typography p={2}>
            <Typography component='span' textAlign='center' display='block' fontWeight={700} pb={1} >Overflow:hidden</Typography>
            ¿Qué es Lorem Ipsum?
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el 
        texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se 
        dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro 
        de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
        electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 
        "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como 
        por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

            </Typography>
           
            

           
        </Box>
        <Box width='40%'  height={200} component='section' border={2} overflow='auto'>
            <Typography p={2}>
            <Typography component='span' textAlign='center' pb={1} display='block' fontWeight={700} >Overflow:auto</Typography>

            ¿Qué es Lorem Ipsum?
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el 
        texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se 
        dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro 
        de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
        electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 
        "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como 
        por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

            </Typography>
           
            

           
        </Box>
        <Box  component='section' border={2}  height={80} >
        <Typography component='span' fontWeight={700} >textOverflow:ellipsis</Typography>

            <Typography p={0} component='p' width={200} whiteSpace='nowrap' overflow={"hidden"} textOverflow='ellipsis'    >

            {/* ¿Qué es Lorem Ipsum? */}
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el 
        texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se 
        dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro 
        de textos especimen. 

            </Typography>
           
            

           
        </Box>
        
      </Box>
        
    </Box>
  )
}
