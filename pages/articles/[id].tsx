
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import axios from 'axios';


const fetchArticle = (id: string) => axios.get(`https://api.realworld.io/api/articles/${id}/`).then(({ data }) => data);

export default function ArticlePage() {
  const router = useRouter();
  const id = typeof router.query?.id === 'string' ? router.query.id : '';
  const { status, data } = useQuery(['getArticles', id], () => fetchArticle(id), {
    enabled: true,
    staleTime: Infinity
  });

  return (
      <>
        <p>{status}</p>
        <br />
        <Link href={'/articles'}>목록으로</Link>
        <br />
        <div>{JSON.stringify(data)}</div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getArticles', id], () => fetchArticle(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});
