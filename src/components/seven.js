import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import {connect} from 'react-redux';
import {SEVEN} from '../action/actions';
import {bindActionCreators} from 'redux';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
  }
});
const Seven = (props)=> {
  const { classes } = props;
  return (
    <div><Fab color="primary" aria-label="Add" className={classes.fab} onClick={(e)=>{e.preventDefault();props.dispatch(SEVEN());}}>1</Fab></div>
  );
}
function dispatchToProps(dispatch){
  return {actions:bindActionCreators(SEVEN,dispatch)};
}
const sevenApp = connect(dispatchToProps)(Seven);
export default withStyles(styles)(sevenApp);