import {Switch, SwitchProps} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      right: 0,
    },
  }),
);

export default function DarkThemeSwitch(props: SwitchProps) {
  const classes = useStyles();

  return (
    <Switch
      className={classes.root}
      checked={props.checked}
      onChange={props.onChange}
      name="darkThemeSwitch"
    />
  );
}
