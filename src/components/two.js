import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TWO} from '../action/actions';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
  }
});
const Two = (props) => {
  const { classes } = props;
  return (
  	<div><Fab color="primary" aria-label="Add" className={classes.fab} onClick={(e)=>{e.preventDefault(); props.dispatch(TWO())}}>2</Fab></div>
  );
}
function dispatchToProps(dispatch){
  return {actions:bindActionCreators(TWO,dispatch)}
}
const twoApp = connect(dispatchToProps)(Two);
export default withStyles(styles)(twoApp);