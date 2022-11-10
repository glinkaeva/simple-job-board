import type { NextPage } from 'next'
import Error from '../components/dataError/Error'
import Pagination from '../components/pagination/Pagination'
import { loadVacanciesData } from '../functions/fetch'

const IndexPage: NextPage = ({data}:any) => {
  return (
    data.length>1 ? 
    <Pagination 
      itemsPerPage={15}
      itemsList={data}
    /> 
    : 
    <Error />
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