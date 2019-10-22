import {Component} from '@angular/core';
import {filter} from 'rxjs/operators';

export interface Post {
  title: string;
  text: string;
  id?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учю компоненты', id: 1},
    {title: 'Следущий блок', text: 'Будет про директивы и пайпы', id: 2}
  ];

  updatePost(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  removePost(id: number) {
    console.log('Id', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
