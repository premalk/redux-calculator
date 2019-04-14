const initialState = '';
export const rootReducer = (state=initialState,action) =>{
	switch(action.type){
		case 'ONE':
			return state + action.value;
		case 'TWO':
			return state + action.value;
		case 'PLUS':
			return state + action.value;
		case 'EQUAL':
		{
			let a = state.split('+');
			let b = add(a);
			return b;
			function add(a){
				return a.reduce((add,x)=>parseInt(add)+parseInt(x));
			}
		}
		default:
			return state;
	}
}