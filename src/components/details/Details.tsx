import Image from 'next/image'
import Head from 'next/head'
import React, { useContext } from 'react'
import s from './details.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'
import TimeAgo from 'timeago-react';

import bookmark from '../../../public/images/bookmark.svg'
import share from '../../../public/images/share.svg'
import arrow from '../../../public/images/arrow.svg'
import AdditionalLabel from '../additionalLabel/AdditionalLabel'
import SimpleMap from '../googleMap/Map';
import CurrentVacancies from '../../functions/context';

export default function Details() {
  const contextValue = useContext(CurrentVacancies);

  let description:Array<string> = contextValue.currentVacancy.description.split(/\r\n|\r|\n/g);
  let descArray:Array<string> = [];
  
  for(let i=0; i<description.length; i++) {
    if(description[i].trim()!="") descArray.push(description[i].trim())
  }
  const listItem = descArray[4].split(".");
  const listItemPop = listItem.pop();

  let salary = contextValue.currentVacancy.salary.replace(/[^+\d\-]/g, '').split("-");

  const keyForPictures = [];
  for(let i=0; i<contextValue.currentVacancy.pictures.length; i++) {
    keyForPictures.push(i)
  }

  return (
    <>
      <Head>
          <title>Job board</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`wrapper ${s.wrapper}`}>
        <div className={s.left_side}>
          <div className={s.header}>
            <p className={s.headline}>
              Job Details
            </p>
            <div className={s.social}>
              <div className={s.social_cont}>
                <Image 
                  width={16}
                  height={20}
                  src={bookmark}
                  alt='bookmark icon'
                />
                <p>Save to my list</p>
              </div>
              <div className={s.social_cont}>
                <Image 
                  width={18}
                  height={20}
                  src={share}
                  alt='share icon'
                />
                <p>Share</p>
              </div>
            </div>
          </div>
  
          <button className={`${s.button} ${s.hide}`}>
            apply now
          </button>
  
          <div className={s.headline_cont}>
            <p className={s.headline} style={{letterSpacing: '-0.75px'}}>
              {contextValue.currentVacancy.title}
            </p>
            <div className={s.offer}>
              <p className={s.salary}>{`€ ${salary[0]} 000—${salary[1]} 000`}</p>
              <p className={s.text}>Brutto, per year</p>
            </div>
            <p className={s.posted}>
              Posted <TimeAgo datetime={contextValue.currentVacancy.createdAt} locale='en' />
            </p>
          </div>
  
          <div className={s.content}>
            <p className={s.text}>
              { descArray[0] }
            </p>
            <p className={s.title}>
              { descArray[1] }
            </p>
            <p className={s.text}>
              { descArray[2] }
            </p>
            <p className={s.title}>
              { descArray[3] }
            </p>
            <p className={`${s.text} ${s.list_title}`}>
              Our physicians enjoy a wide range of benefits, including:
            </p>
            <ul className={s.list}>
              {
                listItem.map((item:string) => {
                  if(item!=="") {
                    return <li className={s.text} key={item}>
                      {item}
                    </li>
                  }
                })
              }
            </ul>
          </div>
  
          <button className={s.button}>
            apply now
          </button>
  
          <div className={s.additional}>  
            <p className={s.headline}>Additional info</p>
            <div className={s.container}>
              <p className={s.text}>Employment type</p>
              <div className={s.box}>
                {
                  contextValue.currentVacancy.employment_type.map((item) => {
                    return <AdditionalLabel 
                      key = {item}
                      color = "blue"
                      text = {item}
                    />
                  })
                }
              </div>
            </div>
            <div className={s.container}>
              <p className={s.text}>Benefits</p>
              <div className={s.box}>
                <AdditionalLabel 
                  color = "yellow"
                  text = "Flexible shedule"
                />
                <AdditionalLabel 
                  color = "yellow"
                  text = "Relocation assistance"
                />
              </div>
            </div>
          </div>
  
          <div className={s.gallery}>
            <p className={s.headline}>Attached images</p>
            <Swiper
              spaceBetween={10}
              slidesPerGroup={1}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                }
              }}
            >
              {
                contextValue.currentVacancy.pictures.map((item, index) => {
                  return <SwiperSlide key={index}>
                    <div className={s.slider_image} style={{backgroundImage: `url(${item})`}} />
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </div>
        <Link href={'/'} className={s.returnButton}>
            <Image 
              width={10}
              height={18}
              src={arrow}
              alt="arrow icon"
            />
            RETURN TO JOB BOARD
        </Link>
        <div className={s.right_side}>
          <SimpleMap 
            lat = {contextValue.currentVacancy.location.lat}
            lng = {contextValue.currentVacancy.location.long}
            address = {contextValue.currentVacancy.address}
            phone = {contextValue.currentVacancy.phone}
            email = {contextValue.currentVacancy.email}
          />
        </div>
      </div>
    </>
  )
}
