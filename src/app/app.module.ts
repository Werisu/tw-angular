import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { HomeComponent } from './pages/home/home.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FormsModule } from '@angular/forms';

import { MessagesService } from "./services/messages.service";
import { HttpClientModule } from '@angular/common/http';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    TweetComponent,
    HomeComponent,
    NewPostComponent,
    SidebarLeftComponent,
    SidebarRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		HttpClientModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
