import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import rengoku from '../../../assets/img/31f399f8b385b923ad1db24f01dc4b7b58d18d62.jpg'
import Image from 'next/image';
import Darkmode from '../../components/darkmode/darkmode';


const ProfileLayout = makeStyles((theme) => ({
  root: {
    width: "400px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    background: "white",
    boxShadow: "0px 6px 14px 0px rgb(0 0 0 / .1)",
    
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1),
  },
  bio: {
    textAlign: "center",
    maxWidth: "400px",
    margin: theme.spacing(2),
  },
}));
function ProfilePage() {
    const classes = ProfileLayout();
  return (
    
    <div id='profile-holder' className={classes.root}>
    <Avatar className={classes.avatar}>
      <Image  
      alt="Profile Picture"
      src={rengoku}
      className={classes.avatar}/>
    </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Kyojuro Rengoku
      </Typography>
      <Typography variant="body1" className={classes.bio}>
      Kyojuro Rengoku is a visionary entrepreneur and the founder of Rapidsignal, a successful technology company that has revolutionized the way people communicate and connect. With a passion for innovation and a commitment to making a positive impact on the world, Rengoku has built a reputation as a leader in the tech industry.
      </Typography>
    </div>
  );
}

export default ProfilePage;
