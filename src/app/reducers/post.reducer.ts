
import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post';

export type Action = PostActions.All;

export function postReducer(state: Post, action:Action){
	console.log(action.type, state);
	
	switch(action.type) {
		case PostActions.GET_POST:
			return { ...state, loading:true };

		case PostActions.GET_POST_SUCCESS:
			return { ...state, ...action.payload, loading:false };

		case PostActions.GET_POST_FAIL:
			return { ...state, ...action.payload, loading:false };

		case PostActions.VOTE_UPDATE:
			return { ...state, ...action.payload, loading:true };

		case PostActions.VOTE_UPDATE_SUCCESS:
			return { ...state, loading:false };

		case PostActions.VOTE_UPDATE_FAIL:
			return { ...state, ...action.payload, loading:false };

		default: return state;
	}
}