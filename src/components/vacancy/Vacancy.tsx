import Image from 'next/image'
import React from 'react'
import s from './vacancy.module.scss'
import Link from 'next/link'
import TimeAgo from 'timeago-react';

import Ratings from 'react-ratings-declarative';

import location from '../../../public/images/location.svg'
import bookmark from '../../../public/images/bookmark.svg'
import { useState } from 'react';

export default function Vacancy(props: any) {
  const [rating, setRating] = useState(5)

  return (
    <div className={s.vacancy_container}>
      <img 
          width={85}
          height={85}
          className={s.preview}
          src={props.previewSrc}
          alt='company photo'
        />
      <div className={s.box}>
        <div className={s.content}>
          <p className={s.headline} onClick={props.titleOnClick}>
            {/* //! Можно поставить кверю на ширину экрана, и юзнуть слайс для входящих данных */}
            <Link href={`/job_vacancy/${props.id}`}>
              {props.title}
            </Link>
          </p>
          <p className={s.additionalInf}>
            {props.additional}
          </p>
          <div className={s.location}>
            <Image
              width={13}
              height={18}
              className={s.icon}
              src={location}
              alt='location icon'
            />
            <p className={s.additionalInf}>
              {props.location}
            </p>
          </div>
        </div>
        <div className={s.user_things}>
          <Image 
            width={16}
            height={20}
            className={s.bookmark} 
            src={bookmark}
            alt='bookmark'
          />

          {/* 
            // Bad way out of the situation with stars styles, but I couldn't think of a better one. 
            // These components are from the library, and you can't change their attributes just like that. 
            // I had to create two containers. I don't like it.
          */}
          <div className={`${s.stars} ${s.stars_desc}`}>
            <Ratings
              rating={rating}
              widgetRatedColors="#38415D"
              changeRating={setRating}
              widgetSpacings={"0px"}
            >
              <Ratings.Widget 
                svgIconViewBox="0 0 19 18"
                svgIconPath="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                widgetDimension={"19px"} 
                widgetHoverColor="#38415D"
              />
              <Ratings.Widget 
                svgIconViewBox="0 0 19 18"
                svgIconPath="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                widgetDimension={"19px"} 
                widgetHoverColor="#38415D"
              />
              <Ratings.Widget 
                svgIconViewBox="0 0 19 18"
                svgIconPath="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                widgetDimension={"19px"} 
                widgetHoverColor="#38415D"
              />
              <Ratings.Widget 
                svgIconViewBox="0 0 19 18"
                svgIconPath="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                widgetDimension={"19px"} 
                widgetHoverColor="#38415D"
              />
              <Ratings.Widget 
                svgIconViewBox="0 0 19 18"
                svgIconPath="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                widgetDimension={"19px"} 
                widgetHoverColor="#38415D"
              />
            </Ratings>
          </div>

          <div className={`${s.stars} ${s.stars_mobile}`}>
            <Ratings
              rating={rating}
              widgetRatedColors="#767F95"
              changeRating={setRating}
              widgetSpacings={"0px"}
            >
              <Ratings.Widget 
                svgIconViewBox="0 0 10 10"
                svgIconPath="M3.52575 2.55003C3.91053 1.62864 4.64229 0.000488281 5.00871 0.000488281C5.54085 -6.72744e-05 6.70647 3.15938 6.70647 3.15938C6.70647 3.15938 7.78552 3.25882 8.65763 3.36049C9.12061 3.41438 9.94731 3.4966 9.99905 3.76604C10.0101 3.82438 9.94362 4.06271 9.82273 4.22882C9.31065 4.93438 7.9819 6.44604 7.9819 6.44604C7.9819 6.44604 8.05476 7.16827 8.11969 7.95827C8.16139 8.46938 8.27384 9.50493 8.23319 9.68993C8.18884 9.89382 8.10913 9.94938 8.02625 9.9816C7.8098 10.0649 7.30723 9.74104 6.7202 9.44438C5.92041 9.03938 5.02191 8.6066 5.02191 8.6066C5.02191 8.6066 4.42907 8.93382 3.72642 9.25327C2.97573 9.59438 2.21554 10.1566 1.89827 9.95882C1.7003 9.83493 1.84706 8.86938 1.92308 8.00993C1.99435 7.19938 2.05611 6.45882 2.05611 6.45882C2.05611 6.45882 1.61583 5.91327 1.10323 5.32993C0.549456 4.69938 -0.125741 4.01882 0.02049 3.76882C0.130823 3.57993 0.63445 3.47882 1.48016 3.36827C2.37866 3.25049 3.27611 3.16716 3.27611 3.16716C3.27611 3.16716 3.37392 2.91362 3.52575 2.55003Z"
                widgetDimension={"10px"} 
                widgetHoverColor="#767F95"
              />
              <Ratings.Widget 
                svgIconViewBox="0 0 10 10"
                svgIconPath="M3.52575 2.55003C3.91053 1.62864 4.64229 0.000488281 5.00871 0.000488281C5.54085 -6.72744e-05 6.70647 3.15938 6.70647 3.15938C6.70647 3.15938 7.78552 3.25882 8.65763 3.36049C9.12061 3.41438 9.94731 3.4966 9.99905 3.76604C10.0101 3.82438 9.94362 4.06271 9.82273 4.22882C9.31065 4.93438 7.9819 6.44604 7.9819 6.44604C7.9819 6.44604 8.05476 7.16827 8.11969 7.95827C8.16139 8.46938 8.27384 9.50493 8.23319 9.68993C8.18884 9.89382 8.10913 9.94938 8.02625 9.9816C7.8098 10.0649 7.30723 9.74104 6.7202 9.44438C5.92041 9.03938 5.02191 8.6066 5.02191 8.6066C5.02191 8.6066 4.42907 8.93382 3.72642 9.25327C2.97573 9.59438 2.21554 10.1566 1.89827 9.95882C1.7003 9.83493 1.84706 8.86938 1.92308 8.00993C1.99435 7.19938 2.05611 6.45882 2.05611 6.45882C2.05611 6.45882 1.61583 5.91327 1.10323 5.32993C0.549456 4.69938 -0.125741 4.01882 0.02049 3.76882C0.130823 3.57993 0.63445 3.47882 1.48016 3.36827C2.37866 3.25049 3.27611 3.16716 3.27611 3.16716C3.27611 3.16716 3.37392 2.91362 3.52575 2.55003Z"
                widgetDimension={"10px"} 
                widgetHoverColor="#767F95"
              />
              <Ratings.Widget 
                svgIconViewBox="0 0 10 10"
                svgIconPath="M3.52575 2.55003C3.91053 1.62864 4.64229 0.000488281 5.00871 0.000488281C5.54085 -6.72744e-05 6.70647 3.15938 6.70647 3.15938C6.70647 3.15938 7.78552 3.25882 8.65763 3.36049C9.12061 3.41438 9.94731 3.4966 9.99905 3.76604C10.0101 3.82438 9.94362 4.06271 9.82273 4.22882C9.31065 4.93438 7.9819 6.44604 7.9819 6.44604C7.9819 6.44604 8.05476 7.16827 8.11969 7.95827C8.16139 8.46938 8.27384 9.50493 8.23319 9.68993C8.18884 9.89382 8.10913 9.94938 8.02625 9.9816C7.8098 10.0649 7.30723 9.74104 6.7202 9.44438C5.92041 9.03938 5.02191 8.6066 5.02191 8.6066C5.02191 8.6066 4.42907 8.93382 3.72642 9.25327C2.97573 9.59438 2.21554 10.1566 1.89827 9.95882C1.7003 9.83493 1.84706 8.86938 1.92308 8.00993C1.99435 7.19938 2.05611 6.45882 2.05611 6.45882C2.05611 6.45882 1.61583 5.91327 1.10323 5.32993C0.549456 4.69938 -0.125741 4.01882 0.02049 3.76882C0.130823 3.57993 0.63445 3.47882 1.48016 3.36827C2.37866 3.25049 3.27611 3.16716 3.27611 3.16716C3.27611 3.16716 3.37392 2.91362 3.52575 2.55003Z"
                widgetDimension={"10px"} 
                widgetHoverColor="#767F95"
              />
              <Ratings.Widget 
                svgIconViewBox="0 0 10 10"
                svgIconPath="M3.52575 2.55003C3.91053 1.62864 4.64229 0.000488281 5.00871 0.000488281C5.54085 -6.72744e-05 6.70647 3.15938 6.70647 3.15938C6.70647 3.15938 7.78552 3.25882 8.65763 3.36049C9.12061 3.41438 9.94731 3.4966 9.99905 3.76604C10.0101 3.82438 9.94362 4.06271 9.82273 4.22882C9.31065 4.93438 7.9819 6.44604 7.9819 6.44604C7.9819 6.44604 8.05476 7.16827 8.11969 7.95827C8.16139 8.46938 8.27384 9.50493 8.23319 9.68993C8.18884 9.89382 8.10913 9.94938 8.02625 9.9816C7.8098 10.0649 7.30723 9.74104 6.7202 9.44438C5.92041 9.03938 5.02191 8.6066 5.02191 8.6066C5.02191 8.6066 4.42907 8.93382 3.72642 9.25327C2.97573 9.59438 2.21554 10.1566 1.89827 9.95882C1.7003 9.83493 1.84706 8.86938 1.92308 8.00993C1.99435 7.19938 2.05611 6.45882 2.05611 6.45882C2.05611 6.45882 1.61583 5.91327 1.10323 5.32993C0.549456 4.69938 -0.125741 4.01882 0.02049 3.76882C0.130823 3.57993 0.63445 3.47882 1.48016 3.36827C2.37866 3.25049 3.27611 3.16716 3.27611 3.16716C3.27611 3.16716 3.37392 2.91362 3.52575 2.55003Z"
                widgetDimension={"10px"} 
                widgetHoverColor="#767F95"
              />
              <Ratings.Widget 
                svgIconViewBox="0 0 10 10"
                svgIconPath="M3.52575 2.55003C3.91053 1.62864 4.64229 0.000488281 5.00871 0.000488281C5.54085 -6.72744e-05 6.70647 3.15938 6.70647 3.15938C6.70647 3.15938 7.78552 3.25882 8.65763 3.36049C9.12061 3.41438 9.94731 3.4966 9.99905 3.76604C10.0101 3.82438 9.94362 4.06271 9.82273 4.22882C9.31065 4.93438 7.9819 6.44604 7.9819 6.44604C7.9819 6.44604 8.05476 7.16827 8.11969 7.95827C8.16139 8.46938 8.27384 9.50493 8.23319 9.68993C8.18884 9.89382 8.10913 9.94938 8.02625 9.9816C7.8098 10.0649 7.30723 9.74104 6.7202 9.44438C5.92041 9.03938 5.02191 8.6066 5.02191 8.6066C5.02191 8.6066 4.42907 8.93382 3.72642 9.25327C2.97573 9.59438 2.21554 10.1566 1.89827 9.95882C1.7003 9.83493 1.84706 8.86938 1.92308 8.00993C1.99435 7.19938 2.05611 6.45882 2.05611 6.45882C2.05611 6.45882 1.61583 5.91327 1.10323 5.32993C0.549456 4.69938 -0.125741 4.01882 0.02049 3.76882C0.130823 3.57993 0.63445 3.47882 1.48016 3.36827C2.37866 3.25049 3.27611 3.16716 3.27611 3.16716C3.27611 3.16716 3.37392 2.91362 3.52575 2.55003Z"
                widgetDimension={"10px"} 
                widgetHoverColor="#767F95"
              />
            </Ratings>
          </div>

          <p className={s.additionalInf}>
            Posted <TimeAgo datetime={props.posted} locale='en' />
          </p>
        </div>
      </div>
    </div>
  )
}
