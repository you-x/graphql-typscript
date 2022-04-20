import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }
}
