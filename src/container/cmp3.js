import React from 'react'
import { Link } from 'react-router-dom';

const Block2 = (props) => {
    const { imgurl, title, description, category, date, ids } = props;
    return (
        <Link to={`/${category}/${ids}`} state={{ title: title, img: imgurl, description: description, id: ids, date: date, category: category }} >   {/* passing props to the next component */}
            <div className='block2'>
                <img className='block2_img' src={imgurl} alt="Not found"/>
                <div className='block2_data'>
                    <h2 className='block2_title'>{title}</h2> 
                    <p className='block2_desc' >{description}</p>
                    <span className='block2_flex'>
                        <span>{category}</span> <p>{date}</p>
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default Block2;