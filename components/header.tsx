import { Avatar, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import SocialButton from '../components/social-btn';
import profilePic from '../public/profile.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '600px',
    },
    avatar: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} direction="column" justify="center" alignItems="center" container>
      <Grid item>
        <Avatar className={classes.avatar}>
          <Image src={profilePic} alt="hamatatsu" layout='fill'/>
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant="h2" gutterBottom>
          Welcome to my page
        </Typography>
      </Grid>
      <Grid item>
        <SocialButton />
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Undergoing construction😉
        </Typography>
      </Grid>
    </Grid>
  );
}
