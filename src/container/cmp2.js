import React from 'react'
import { Link } from 'react-router-dom';

const Block3 = (props) => {
  const { imgUrl, title, date, description, category, ids } = props;

  return (
    <Link to={`/${category}/${ids}`} state= {{img:imgUrl, title:title, date:date, id:ids, category:category, description:description}}>
      <div className='block3'>
        <img className='block3_img' src={imgUrl} alt="" />
        <div className='block3_data'>
          <b>{title}</b>
          <div className='block3_flex'>
            <span>{category}</span><p>{date}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Block3;