import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import {connect} from 'react-redux';
import {THREE} from '../action/actions';
import {bindActionCreators} from 'redux';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
  }
});
const Three = (props)=> {
  const { classes } = props;
  return (
    <div><Fab color="primary" aria-label="Add" className={classes.fab} onClick={(e)=>{e.preventDefault();props.dispatch(THREE());}}>3</Fab></div>
  );
}
function dispatchToProps(dispatch){
  return {actions:bindActionCreators(THREE,dispatch)};
}
const threeApp = connect(dispatchToProps)(Three);
export default withStyles(styles)(threeApp);