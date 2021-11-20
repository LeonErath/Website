import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { getAllPosts } from "../../utils/blog.utils";
import { getRelativeTime } from "../../utils/data.utils";
import classes from "./index.module.scss";

type Post = {
  slug: string;
  data: any;
};

type Props = {
  posts: Post[];
};

export default function TestPage({ posts }: Props) {
  return (
    <div className={classes.container}>
      <Head>
        <title>Leon Erath | Blog</title>
      </Head>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <a className={classes.blogItem}>
            <img src={post.data.image} alt="" />
            <div>
              <h1>{post.data.title}</h1>
              <p>{post.data.description}</p>

              <div className={classes.meta}>
                <span className={classes.author}>
                  <img
                    src={post.data.authorImage}
                    alt=""
                    className={classes.authorImage}
                  />
                  {post.data.author}
                </span>
                <span>{getRelativeTime(new Date(post.data.created))}</span>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts: Post[] = getAllPosts().map(({ slug, file }) => ({
    slug,
    data: matter(file).data,
  }));

  return { props: { posts } };
}
