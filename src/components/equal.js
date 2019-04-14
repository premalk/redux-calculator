import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {EQUAL} from '../action/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    marginTop:13,
    width:280
  }
});
const Equal = (props) => {
  const { classes } = props;
  return (
  	<div><Button variant="contained" size="large" color="primary" className={classes.margin} onClick={(e)=>{e.preventDefault();props.dispatch(EQUAL())}}>=</Button></div>
  );
}
function dispatchProps(dispatch){
	return {actions:bindActionCreators(EQUAL,dispatch)}
}
const equalApp = connect(dispatchProps)(Equal);
export default withStyles(styles)(equalApp);