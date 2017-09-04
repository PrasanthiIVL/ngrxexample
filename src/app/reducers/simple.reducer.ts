import { Action } from '@ngrx/store';

const defaultState: string = "Hello World";

export function simpleReducer(state: string = defaultState, action:Action){
	console.log(action.type, state);

	switch(action.type){
		case 'SPANISH': return state = 'Hola Mundo';

		case 'FRENCH': return state = 'Bonour le monde';
	
		case 'DEFAULT': return defaultState;

		default: return state;
	}

}