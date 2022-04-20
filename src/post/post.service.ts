import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }
}
