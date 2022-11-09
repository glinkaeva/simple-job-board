import React from 'react'
import Head from 'next/head'

type TItem = {
  id: string,
  pictures: string,
  title: string,
  name: string, 
  address: string, 
  createdAt: string,
}

function Items({ currentItems }) {
  return (
    <div className={s.container}>
      <Head>
        <title>Simple Job Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
          currentItems && currentItems.map((item: TItem) => {
          return <Vacancy 
            key={item.id}
            id={item.id}
            previewSrc={item.pictures[0]}
            title={item.title}
            titleOnClick={() => {
              contextValue.setValue(item)
            }}
            additional={item.name}
            location={item.address}
            posted={item.createdAt}
          />
        })
      }
    </div>
  );
}

export default function Pagination() {
  return (
    <div>Pagination</div>
  )
}
