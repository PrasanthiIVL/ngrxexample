import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EffectsModule } from '@ngrx/effects';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';
import { PostEffects } from './effects/post.effects';
import { firebaseConfig } from '../environments/firebase.config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    StoreModule.provideStore({ 
      message : simpleReducer,
      post : postReducer 
    }),
    EffectsModule.run(PostEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
