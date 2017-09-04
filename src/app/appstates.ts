import { Post } from './models/post'; 

export interface AppState{
	message: string;	
};

export interface PostAppState{
	post: Post
};