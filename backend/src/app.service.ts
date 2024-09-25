import { Injectable } from '@nestjs/common';
import {ProjectsService} from "@/projects/projects.service";
import {PostService} from "@/post/post.service";

@Injectable()
export class AppService {
    constructor(
        private readonly projectsService: ProjectsService,
        private readonly postService: PostService,
    ) {}

    async getPostsProjects() {
        const posts = await this.postService.getAll();
        const projects = await this.projectsService.getProjects();
        return {posts, projects};
    }
}
