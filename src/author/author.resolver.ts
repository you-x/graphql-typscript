import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Author, Post } from 'src/graphql';
import { AuthorService } from './author.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @ResolveField('posts')
  posts(@Parent() author: Author): Promise<Post[]> {
    return [
      {
        id: 1,
        title: 'Post 1',
      },
    ];
  }

  @Query('authors')
  findAll(): Promise<Author[]> {
    return [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
      {
        id: 3,
        name: 'Jack Doe',
      },
    ];
  }

  @Query('author')
  findOne(@Args('id') id: number) {
    return { id: 1, name: 'John Doe' };
  }
}
