import { Button, TextField, Card, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

function Contact() {
  return (
    <div>
      <Card style={{ maxWidth: 450, margin: '0 auto', padding: '20px' }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            CONTACT US
          </Typography>
          <Typography gutterBottom variant="body2">
            Greetings of Peace! Fill out the form and our team will get back to you. Thank you!
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField label="First Name" placeholder="Enter firstname" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField label="Last Name" placeholder="Enter lastname" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} item>
                <TextField type="email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} item>
                <TextField type="number" label="Number" placeholder="Enter your phone number" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} item>
                <TextField label="Message" multiline rows={6} placeholder="Type your message here" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} item>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
