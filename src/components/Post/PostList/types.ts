import type { IPost } from "~/types"

export interface IPostListProps {
  posts: IPost[];
  pending: boolean;
  error?: FetchError;
}