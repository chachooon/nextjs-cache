
import React from 'react';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

const fetchProduct = (id: string) => axios.post(`/api/cache`, { category: id }).then(({ data }) => data);

export default function ArticlePage() {
  const router = useRouter();
  const id = typeof router.query?.category === 'string' ? router.query.category : '';
  const { status:getStatus, data:getData } = useQuery(['getData', id], () => fetchProduct(id), {
    staleTime: 60 * 1000, // 1 minute
    cacheTime: 60 * 1000 * 10, // 10 minutes
  });

  return (
        <>
          <p style={{ color: 'yellow' }}>
          {router.query?.category } &nbsp; &nbsp; &nbsp; {getStatus} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <Link href={'/postProducts'}>목록으로</Link>
          </p>
          <br />
          {getData?.map((data: any, index: number) => (
            <div
              key={index}
              style={{
                border: '1px solid black',
                margin: '10px',
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: '#eee'
              }}>       
             {data.productName && <Link href={String(data.detailLink)}>{data.productName}</Link> } 
            </div>
          ))}
        </>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context.params?.id as string;
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['getData', id], () => fetchProduct(id));

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient)
//     }
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => ({
//   paths: [],
//   fallback: 'blocking'
// });
