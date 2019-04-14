import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});
function Minus(props) {
  const { classes } = props;
  return (
  	<div><Button variant="contained" size="large" color="primary" className={classes.margin}>-</Button></div>
  );
}
export default withStyles(styles)(Minus);