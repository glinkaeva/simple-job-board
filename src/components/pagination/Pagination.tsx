import React from 'react'
import Head from 'next/head'
import Vacancy from '../vacancy/Vacancy';
import s from './pagination.module.scss'
import CurrentVacancies from '../../functions/context';
import { useContext } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

type TItem = {
  id: string,
  pictures: string,
  title: string,
  name: string, 
  address: string, 
  createdAt: string,
}

function Items({ currentItems }) {
  const contextValue = useContext(CurrentVacancies)
  return (
    <>
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
    </>
  );
}

export default function Pagination({ itemsPerPage, itemsList }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = itemsList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(itemsList.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemsList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  
  return (
    <div className={s.container}>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
