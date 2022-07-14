import React from 'react';
import { Link } from 'react-router-dom';

const Block = (props) => {
    const { imgUrl, description, title, dates, category, ids } = props;
    return (
        <Link to={`/${category}/${ids}`} state={{ img: imgUrl, description: description, title: title, date: dates, category: category, id: ids }}>

            <div className='block'>

                    <img className='block_img' src={imgUrl} alt="" />
                    <h2 className='block_title' >{title}</h2>
                    <p className='block_description'>{description}</p>
                    <span className='dates'><p> {category} </p> {dates}</span>
                </div>
               
           
        </Link>
    )
}

export default Block;