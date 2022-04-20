import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Author } from 'src/graphql';
import { AuthorService } from './author.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @ResolveField('posts')
  posts(@Parent() author: Author) {
    return [
      {
        id: 1,
        title: 'Post 1',
      },
    ];
  }

  @Query('authors')
  findAll() {
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
