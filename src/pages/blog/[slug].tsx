import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import ErrorPage from "next/error";
import Head from "next/head";
import React from "react";
import { getPostBySlug, getSlugs } from "../../utils/blog.utils";
import classes from "./blog.module.scss";

export default function TestPage({ source, frontMatter }) {
  if (!source || !frontMatter) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className={classes.wrapper}>
      <Head>
        <title>Leon Erath | {frontMatter.title}</title>
      </Head>
      <div className={classes.container}>
        <img src={frontMatter.image} alt="" />
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...source} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const file = getPostBySlug(params.slug);

  const { content, data } = matter(file);
  const mdxSource = await serialize(content, { scope: data });
  return { props: { source: mdxSource, frontMatter: data } };
}

export async function getStaticPaths() {
  return {
    paths: getSlugs().map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}
