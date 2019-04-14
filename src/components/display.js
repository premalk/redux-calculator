import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width:280
  }
});
class Display extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <TextField disabled
          id="outlined-name"
          className={classes.textField}
          value = {this.props.count}
          margin="normal"
          variant="outlined"
        />
        )
    }
}

function stateToProps(state){
  return {count:state}
}
const displayApp = connect(stateToProps)(Display)
export default withStyles(styles)(displayApp);