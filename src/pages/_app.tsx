import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import CurrentVacancies from '../functions/context'

export default function MyApp({ Component, pageProps }: AppProps) {

  // created state for current open vacancy
  const [currentVacancy, setCurrentVacancy] = useState<object>()

  // created function for set this current open vacancy
  const setValue = (e: Object) => {
    setCurrentVacancy(e)
    console.log(e)
  }

  // created a variable contextValue for data which will be interact to our application
  const contextValue = {
    currentVacancy,
    setValue
  }

  return (
    // created the context provider and connect our variables for access throughout the application
    // have trouble with value type, so I tried to fix that - changed some types, even made the fields optional, but it's still doesn't work)
    // but I'm beginner in TS, so I failed and it's okay, I guess =)
    <CurrentVacancies.Provider value={contextValue}>
      <Component {...pageProps} />
    </CurrentVacancies.Provider>
  )
}
