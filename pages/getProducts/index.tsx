
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useQuery } from 'react-query';

// const fetchProducts = () =>
//   axios
//     .get(`https://stg-api.hanwhalife.com/int/getProducts/menus/insurances`, {
//       headers:{
//         ['channel-screen-id']:'CHLINT_MC_0001',
//         ['channel-device-id']: 'null',
//         ['channel-login-type']: 'null'
//       }
//     })
//     .then(({ data }) => data);
// const { data, status } = useQuery('getProducts', () => fetchProducts(), {
//   enabled: true,
//   staleTime: Infinity
// });

export default function ProductsPage(): React.ReactElement {
  const { status: getStatus, data: getData } = useQuery(
    "getData",
    () => axios.get("/api/cache").then(({ data }) => data),
    {
      staleTime: 60 * 1000, // 1 minute
      cacheTime: 60 * 1000 * 10, // 10 minutes
    }
  );

  return (
    <>
      <p style={{ color: 'yellow' }}>{getStatus}</p>
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
          {/* <Link href={`/getProducts/${data.menuCategory}`}>{JSON.stringify(data)}</Link> */}
          <Link href={`/getProducts/id/?category=${data.menuCategory}`}>{JSON.stringify(data)}</Link>
        </div>
      ))}
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
          {/* <Link href={`/getProducts/${data.menuCategory}`}>{JSON.stringify(data)}</Link> */}
          <Link href={`/getProducts/id/?category=${data.menuCategory}`}>{JSON.stringify(data)}</Link>
        </div>
      ))}
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
          {/* <Link href={`/getProducts/${data.menuCategory}`}>{JSON.stringify(data)}</Link> */}
          <Link href={`/getProducts/id/?category=${data.menuCategory}`}>{JSON.stringify(data)}</Link>
        </div>
      ))}
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
          {/* <Link href={`/getProducts/${data.menuCategory}`}>{JSON.stringify(data)}</Link> */}
          <Link href={`/getProducts/id/?category=${data.menuCategory}`}>{JSON.stringify(data)}</Link>
        </div>
      ))}
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
          {/* <Link href={`/getProducts/${data.menuCategory}`}>{JSON.stringify(data)}</Link> */}
          <Link href={`/getProducts/id/?category=${data.menuCategory}`}>{JSON.stringify(data)}</Link>
        </div>
      ))}
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
          {/* <Link href={`/getProducts/${data.menuCategory}`}>{JSON.stringify(data)}</Link> */}
          <Link href={`/getProducts/id/?category=${data.menuCategory}`}>{JSON.stringify(data)}</Link>
        </div>
      ))}
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
          {/* <Link href={`/getProducts/${data.menuCategory}`}>{JSON.stringify(data)}</Link> */}
          <Link href={`/getProducts/id/?category=${data.menuCategory}`}>{JSON.stringify(data)}</Link>
        </div>
      ))}
    </>
  );
}
