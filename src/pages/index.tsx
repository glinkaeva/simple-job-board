import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Vacancy from '../components/vacancy/Vacancy'
import CurrentVacancies, { GlobalContent } from '../functions/context'
import { loadVacanciesData } from '../functions/fetch'
import s from "../styles/Home.module.scss"

type TItem = {
  id: string,
  pictures: string,
  title: string,
  name: string, 
  address: string, 
  createdAt: string,
}

const IndexPage: NextPage = ({data}:any) => {
  const contextValue = useContext(CurrentVacancies)
  return (
    <div className={s.container}>
      <Head>
        <title>Simple Job Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        data.map((item: TItem) => {
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
  )
}

export default IndexPage

export async function getStaticProps() {
  const data = await loadVacanciesData();
  return {
    props: {data}
  }
}


















  // const [currentJobData, setCurrentJobData] = useState(null)

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     if (localStorage.getItem("data")) {
  //       setCurrentJobData(JSON.parse(localStorage.getItem("data")!))
  //     } else {
  //       localStorage.setItem("data", JSON.stringify(data))
  //       setCurrentJobData(data)
  //     }
  //   }
  // }, [])

  // console.log(currentJobData)