import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import coco from '../../../assets/img/download.jpeg'
import Image from 'next/image'

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

function ProfilePage4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <Image  
        alt="Profile Picture"
        src={coco}
        className={classes.avatar}/>
      </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Coco Melon
      </Typography>
      <Typography variant="body1" className={classes.bio}>
      Coco Melon is a highly skilled and dedicated security guard who takes great pride in his work. his commitment to maintaining a safe and secure environment has earned his the respect and admiration of his colleagues and the people he protects.
      </Typography>
    </div>
  );
}

export default ProfilePage4;
