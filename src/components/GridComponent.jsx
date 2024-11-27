import { Grid2 as Grid, Typography } from "@mui/material"

export const GridComponent = () => {
  return (
    <Grid border={2} container size={12} p={1} spacing={1} flexWrap='wrap' direction='column' textAlign='center'  >
        <Typography variant="h5" p={2} >Grid</Typography>
        <Grid container >
        <Grid size={2} border={1} p={1} borderRadius={1} > size=2</Grid>
        <Grid size={4} border={1} p={1} borderRadius={1}  > size=4</Grid>
        <Grid size={6} border={1} p={1} borderRadius={1}   > size=8</Grid>
        </Grid>
        <Grid container spacing={2} >
        <Grid size='grow' border={1} p={1} borderRadius={1} > size=grow</Grid>
        <Grid size={3} border={1} p={1} borderRadius={1}  > size=3</Grid>
        <Grid size='grow' border={1} p={1} borderRadius={1}   > size=grow</Grid>
        </Grid>
        <Grid container spacing={4} >
        <Grid size='auto' border={1} p={1} borderRadius={1} > size=grow</Grid>
        <Grid size={4} border={1} p={1} borderRadius={1}  > size=3</Grid>
        <Grid size='grow' border={1} p={1} borderRadius={1}   > size=grow</Grid>
        </Grid>

    </Grid>
  )
}
