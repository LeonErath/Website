import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import ErrorPage from "next/error";
import Head from "next/head";
import React, { useEffect } from "react";
import { getPostBySlug, getSlugs } from "../../utils/blog.utils";
import classes from "./blog.module.scss";
import Image from "next/image";
import { shimmer, toBase64 } from "../../utils/shimmer.utils";

export default function TestPage({ source, frontMatter }) {
  useEffect(() => {
    if ((window as any).twttr) {
      (window as any).twttr.widgets.load();
    }
  }, []);

  if (!source || !frontMatter) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className={classes.wrapper}>
      <Head>
        <title>Leon Erath | {frontMatter.title}</title>
      </Head>
      <div className={classes.container}>
        <Image
          priority
          width={800}
          layout="responsive"
          height={450}
          src={frontMatter.image}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(800, 450)
          )}`}
          alt=""
        />
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
