
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Author {
    id: string;
    name: string;
    posts: Post[];
}

export interface IQuery {
    authors(): Nullable<Author>[] | Promise<Nullable<Author>[]>;
    author(id: number): Nullable<Author> | Promise<Nullable<Author>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export interface Post {
    id: string;
    title: string;
    author: Author;
}

export interface IMutation {
    health(): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
