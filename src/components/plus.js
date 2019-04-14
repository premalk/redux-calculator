import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PLUS} from '../action/actions';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  
  }
});
const Plus = (props) => {
  const { classes } = props;
  return (
  	<div><Button variant="contained" size="large" color="primary" className={classes.margin} onClick={(e)=>{e.preventDefault();props.dispatch(PLUS())}}>+</Button></div>
  );
}
function dispatchProps(dispatch){	
	return {actions:bindActionCreators(PLUS,dispatch)}
}
const plusApp = connect(dispatchProps)(Plus);
export default withStyles(styles)(plusApp);