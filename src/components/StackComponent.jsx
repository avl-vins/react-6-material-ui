import { Button, Divider, IconButton, Stack, Typography } from "@mui/material"
import { Alarm, DeleteOutlined, MapSharp, RoomTwoTone, SendOutlined, } from "@mui/icons-material"; '@mui/icons-material/DeleteOutline';

export const StackComponent = () => {
  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" />} >
        <Typography variant="h4" align="center">Buttons</Typography>
        <Stack spacing={2} direction='row' >
            <Typography> Basic Buttons</Typography>
            <Button variant="contained"  >Contained</Button>
            <Button variant="text" >text</Button>
            <Button variant="outlined" >Outlined</Button>
        </Stack>
        <Stack spacing={2} direction={'row'} >
            <Typography> text Buttons</Typography>
            <Button variant="text" >Text</Button>
            <Button disabled >Disabled</Button>
            <Button href="http://google.com"     >Google</Button>
        </Stack>
        <Stack spacing={2} direction={'row'} >
            <Typography>Contained Button</Typography>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled >Disabled</Button>
            <Button variant="contained" >Link</Button>
        </Stack>
        <Stack spacing={2} direction={'row'} >
            <Typography>Outlined Button</Typography>
            <Button variant="outlined">outlined</Button>
            <Button variant="outlined" disabled >Disabled</Button>
            <Button variant="outlined" >Link</Button>
        </Stack>
        <Stack spacing={2} direction={'row'} >
            <Typography>Sizes Button</Typography>
            <Button variant="outlined" size="small" >Small</Button>
            <Button variant="outlined" size="medium" disabled >Medium</Button>
            <Button variant="outlined" size="large" >Large</Button>
        </Stack>
        <Stack spacing={2} direction={'row'} >
            <Typography>Button with icon</Typography>
            <Button variant="outlined" size="small" startIcon={<DeleteOutlined/>} >Delete</Button>
            <Button variant="outlined" size="medium" disabled >Medium</Button>
            <Button variant="outlined" size="large" endIcon={< SendOutlined/>} >Send</Button>
        </Stack>
        <Stack spacing={2} direction={'row'} >
            <Typography>Icon Button</Typography>
            <IconButton>
                <Alarm/>
            </IconButton>
            <IconButton>
                <RoomTwoTone/>
            </IconButton>
            <IconButton>
                <MapSharp/>
            </IconButton>
        </Stack>
        <Stack spacing={2}>
                
        </Stack>
    </Stack>
  )
}
