import React, { useContext } from 'react'
import Error from '../../components/dataError/Error';
import Details from '../../components/details/Details'
import CurrentVacancies from '../../functions/context';

export default function Vacancies() {
  const contextValue = useContext(CurrentVacancies);
  return (
    (contextValue.currentVacancy === undefined) ? <Error /> : <Details/>
  )
}

