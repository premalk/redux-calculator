import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import {connect} from 'react-redux';
import {ONE} from '../action/actions';
import {bindActionCreators} from 'redux';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
  }
});
const One = (props)=> {
  const { classes } = props;
  return (
    <div><Fab color="primary" aria-label="Add" className={classes.fab} onClick={(e)=>{e.preventDefault();props.dispatch(ONE());}}>1</Fab></div>
  );
}
function dispatchToProps(dispatch){
  return {actions:bindActionCreators(ONE,dispatch)};
}
const oneApp = connect(dispatchToProps)(One);
export default withStyles(styles)(oneApp);