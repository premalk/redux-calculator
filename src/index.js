import React from 'react';
import {render} from 'react-dom';
import ParentComponent from './components/index';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {rootReducer} from './reducer/reducer';
const App = () =>{
    return(
        <ParentComponent></ParentComponent>
    )
}
const store1 = applyMiddleware(reduxThunk)(createStore);
const store  = store1(rootReducer);
render(<Provider store={store}><App /></Provider>,document.querySelector('#root'));