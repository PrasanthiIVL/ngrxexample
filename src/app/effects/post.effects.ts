import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFireDatabase } from 'angularfire2/database';
import { Post } from '../models/post';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as PostActions from '../actions/post.actions';
export type Action = PostActions.All;

@Injectable()
export class PostEffects{

	constructor(
		private actions: Actions,
		private db: AngularFireDatabase
		){}

	@Effect()
	getPost: Observable<Action> = this.actions.ofType(PostActions.GET_POST)
									.map((action: PostActions.GetPost) => action.payload)
									.mergeMap(payload => this.db.object(payload))
									.map(post => {
										post.pushKey = post.$key;
										return new PostActions.GetPostSuccess(post);
										})
									.catch(err => of(new PostActions.GetPostFail({error:err.message})));

	@Effect()
	voteUpdate: Observable<Action> = this.actions.ofType(PostActions.VOTE_UPDATE)
										.map((action: PostActions.VoteUpdate) => action.payload)
										.mergeMap(payload => of(this.db.object('posts/' + payload.post.pushKey)
																.update({
																	votes: payload.post.votes + payload.val
																})))
										.map(() => new PostActions.VoteUpdateSuccess({ message : "success" })) 
										.catch(err => of(new PostActions.VoteUpdateFail({ error: err.message })))
}