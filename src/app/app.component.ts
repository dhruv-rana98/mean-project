import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Array<Object> = [];

  onPostAdded(post: object){
    this.storedPosts.push(post);
  }


}
