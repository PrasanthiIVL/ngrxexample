import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import * as AppStates from './appstates';
import { Post } from './models/post';
import * as PostActions from './actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  message: Observable<string>;
  post: Observable<Post>;
  text:string;

  constructor(
  	private store:Store<AppStates.AppState>,
  	private postStore:Store<AppStates.PostAppState>,
    private db: AngularFireDatabase
  	){
  	this.message = this.store.select('message');
  	this.post = this.postStore.select('post');
  }

  spanishMessage(){
  	this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage(){
  	this.store.dispatch({type: 'FRENCH'});
  }

  resetMessage(){
  	this.store.dispatch({type: 'DEFAULT'});
  }

  getPost(){
    this.postStore.dispatch(new PostActions.GetPost('/posts/testPost'));   
  }

  vote(post: Post, val:number){
    this.postStore.dispatch(new PostActions.VoteUpdate({ post, val }));
  }

}
