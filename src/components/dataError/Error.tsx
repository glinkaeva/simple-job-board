import React from 'react'
import s from './Error.module.scss'
import robot from '../../../public/images/error.png'
import Image from 'next/image'

export default function Error() {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <p className={s.title}>Oops, something wrong...</p>
        <p className={s.sub_title}>We are fixing everything, please go back later =)</p>
        <Image 
          className={s.error_image} 
          src={robot} 
          alt="error robot" 
        />
      </div>
    </div>
  )
}
