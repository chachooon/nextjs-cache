
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchArticles = () => axios.get(`https://api.realworld.io/api/articles/`).then(({ data }) => data);

export default function ArticlesPage(): React.ReactElement {
  const { data, status } = useQuery('getPokemon', () => fetchArticles(), {
    enabled: true,
    staleTime: Infinity
  });

  return (
      <>
        <p style={{ color: 'yellow' }}>{status}</p>
        <br />
        {data?.articles.map((article: any) => (
          <div
            key={article.slug}
            style={{
              border: '1px solid black',
              margin: '10px',
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: '#eee'
            }}>
            <Link href={`/articles/${article.slug}`}>{JSON.stringify(article)}</Link>
          </div>
        ))}
    </>
  );
}
