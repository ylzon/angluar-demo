import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detaile',
  templateUrl: './post-detaile.component.html',
  styleUrls: ['./post-detaile.component.css'],
})
export class PostDetaileComponent implements OnInit {
  entity: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const postId = +params.get('id');
    //   console.log(postId);

    //   this.entity = this.postService.show(postId);
    // });
    this.route.data.subscribe((data: { entity: Post }) => {
      this.entity = data.entity;
    });
  }

  gotoPosts(entity: Post) {
    this.router.navigate(['/posts', { id: entity.id }]);
  }
}
