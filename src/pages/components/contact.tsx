import { Button, TextField } from '@mui/material'
import React from 'react'

function contact() {
  return (
    <div>
    <Card>
      <CardContent>
        <form></form>

     <Grid container spacing={1}></Grid>


    
    </Card>
    
     <Grid xs={12} sm={6} item>

     <TextField label="First Name" placeholder= "Enter firstname" variant="outlined" fullWidth required/>
     </Grid>

    <Grid xs={12} sm={6} item>

    <TextField label="Last Name" placeholder= "Enter lastname" variant="outlined" fullWidth required/>
    </Grid>
    <Grid xs={12} item>
    <TextField type="email" label="Email" placeholder= "Enter your email" variant="outlined" fullWidth required/>
    </Grid>

    <Grid xs={12} item>
    <TextField type="number" label="Number" placeholder= "Enter your phone number" variant="outlined" fullWidth required/>
    </Grid>
    <Grid xs={12} item>
    <TextField label="Message" multiline rows={6} placeholder= "Type your message here" variant="outlined" fullWidth required/>
    </Grid>
    <Grid xs={12} item>
    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
    </Grid>

    </form>
    </CardContent>
    </Card>

    </div>
  )
}

export default contact