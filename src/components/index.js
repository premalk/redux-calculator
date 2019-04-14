import React from 'react';
import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';
import Five from './five';
import Six from './six';
import Seven from './seven';
import Eight from './eight';
import Nine from './nine';
import Zero from './zero';
import Equal from './equal';
import Divide from './divide';
import Multiply from './multiply';
import Plus from './plus';
import Minus from './minus';
import Display from './display';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 300
  }
});
function ParentComponent(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16} justify="center">
            <Typography component={Display}></Typography>
        </Grid>
        <Grid container spacing={16} justify="center">
            <Typography component={One}></Typography>
            <Typography component={Two}></Typography>
            <Typography component={Three}></Typography> 
            <Typography component={Plus}></Typography> 
        </Grid>
        <Grid container spacing={16} justify="center">
            <Typography component={Four}></Typography>
            <Typography component={Five}></Typography>
            <Typography component={Six}></Typography>
            <Typography component={Minus}></Typography>
        </Grid>
        <Grid container spacing={16} justify="center">
            <Typography component={Seven}></Typography>
            <Typography component={Eight}></Typography>
            <Typography component={Nine}></Typography>
            <Typography component={Multiply}></Typography>
        </Grid>
        <Grid container spacing={16} justify="center">
            <Typography component={Zero}></Typography>
            <Typography component={Divide}></Typography>
        </Grid>
        <Grid container spacing={16} justify="center">
          <Typography component={Equal}></Typography>
        </Grid>
      </Paper>
    </div>
  );
}
export default withStyles(styles)(ParentComponent);