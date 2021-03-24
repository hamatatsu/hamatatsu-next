import {Container} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Header from '../components/header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
    },
    avatar: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Header />
    </Container>
  );
}
