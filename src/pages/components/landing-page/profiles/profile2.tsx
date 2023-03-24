import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import sengoku from '../../../../assets/img/sengoku-one-piece.jpg'
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

function ProfilePage2() {
  const classes = useStyles();

  return (
    <div id="profile-holder" className={classes.root}>
      <Avatar className={classes.avatar}>
        <Image alt="Profile Picture" src={sengoku} className={classes.avatar} />
      </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Masakata Sengoku
      </Typography>
      <Typography variant="body1" className={classes.bio}>
        Masakata Sengoku is a successful entrepreneur and co-founder of a
        rapidly growing tech company. With a passion for innovation and a strong
        business acumen, Sengoku has been instrumental in building his company
        from the ground up, turning it into a major player in the tech industry.
      </Typography>
    </div>
  );
}

export default ProfilePage2;
