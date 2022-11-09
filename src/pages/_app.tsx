import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import CurrentVacancies from '../functions/context'

export default function MyApp({ Component, pageProps }: AppProps) {

  const [currentVacancy, setCurrentVacancy] = useState<object>()

  const setValue = (e: Object) => {
    setCurrentVacancy(e)
    console.log(e)
  }

  const contextValue = {
    currentVacancy,
    setValue
  }

  return (
    <CurrentVacancies.Provider value={contextValue}>
      <Component {...pageProps} />
    </CurrentVacancies.Provider>
  )
}
