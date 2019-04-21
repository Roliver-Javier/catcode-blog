import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/core/services/post/post.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent{

  @Input() vm : any;

  constructor(private post : PostService) { }

  ngOnInit(){ 
    this.post.getCatcodePost();
  }
}
