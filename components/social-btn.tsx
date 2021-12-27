import { Grid, Link } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { GitHub, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    socialButton: {
      display: 'block',
      '& > *': {
        fontSize: '2rem',
      },
    },
  }),
);

export default function SocialButton() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} spacing={1} container>
      <Grid item>
        <Link className={classes.socialButton} href="https://twitter.com/hamatatsu0">
          <Twitter />Twitter
        </Link>
      </Grid>
      <Grid item>
        <Link className={classes.socialButton} href="https://github.com/hamatatsu">
          <GitHub />GitHub
        </Link>
      </Grid>
    </Grid>
  );
}
