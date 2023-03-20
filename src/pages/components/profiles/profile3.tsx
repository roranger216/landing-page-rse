import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import goku from '../../../assets/img/goku.jpg'
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    background: 'white',
    boxShadow: '0px 6px 14px 0px rgb(0 0 0 / .1)'
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1),
  },
  bio: {
    textAlign: 'center',
    maxWidth: '400px',
    margin: theme.spacing(2),
  },
}));

function ProfilePage3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <Image  
        alt="Profile Picture"
        src={goku}
        className={classes.avatar}/>
      </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Son Goku
      </Typography>
      <Typography variant="body1" className={classes.bio}>
      Despite his busy schedule as a warrior, Goku is a committed and passionate developer. He is constantly learning and improving his skills, and he enjoys sharing his knowledge with others. He regularly participates in hackathons and coding competitions, and he mentors young developers to help them achieve their goals.
      </Typography>
    </div>
  );
}

export default ProfilePage3;
