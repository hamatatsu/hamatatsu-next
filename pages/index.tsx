import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import DarkThemeSwitch from '../components/dark-theme-switch';
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

export default function Home(props: HomeProps) {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <DarkThemeSwitch state={props.darkState} setter={props.setDarkState} />
      <Grid justify="center" container>
        <Grid item>
          <Header />
        </Grid>
      </Grid>
    </Container>
  );
}

interface HomeProps {
  darkState: boolean,
  setDarkState: (state: boolean) => void,
}
