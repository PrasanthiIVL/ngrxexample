import { Action } from '@ngrx/store';
import { Post } from '../models/post';

export const GET_POST ='Post get';
export const GET_POST_SUCCESS ='Post get success';
export const GET_POST_FAIL = 'Post get fail';

export const VOTE_UPDATE = 'Post Vote';
export const VOTE_UPDATE_SUCCESS = 'Post Vote success';
export const VOTE_UPDATE_FAIL = 'Post Vote fail';

export class GetPost implements Action{
	readonly type = GET_POST;
	constructor(
		public payload:string
		){}
}

export class GetPostSuccess implements Action{
	readonly type = GET_POST_SUCCESS;
	constructor(
		public payload: Post
		){}
}

export class GetPostFail implements Action{
	readonly type = GET_POST_FAIL;
	constructor(
		public payload: any
		){}
}

export class VoteUpdate implements Action{
	readonly type = VOTE_UPDATE;
	constructor(
		public payload:any
		){}
}

export class VoteUpdateSuccess implements Action{
	readonly type = VOTE_UPDATE_SUCCESS;
	constructor(
		public payload: any
		){}
}

export class VoteUpdateFail implements Action{
	readonly type = VOTE_UPDATE_FAIL;
	constructor(
		public payload: any                 
		){}
}

export type All
 = GetPost
 | GetPostSuccess
 | GetPostFail
 | VoteUpdate
 | VoteUpdateSuccess
 | VoteUpdateFail;