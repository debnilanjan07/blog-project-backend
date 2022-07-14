import React, { useEffect, useState } from 'react'
import Block2 from '../container/cmp2';
import Block3 from '../container/cmp3';

const Sports = () => {
  const [response2, setResponse2] = useState([])

  useEffect(() => {
    const sports = "https://blogapis1.herokuapp.com/category/sports"
    fetch(sports).then(res => res.json()).then(result => setResponse2(result))
  })

  return (
    <div id='res'>
      <div className='result'>
        <div className='bollywood'>
          <h1 className='latest_1'>Sports</h1>
          {response2.filter((e) => (e.category === "Sports")).map((c) => {
            return (
              <Block2
                ids={c.id}
                imgurl={c.image}
                description={c.description}
                category={c.category}
                date={c.date}
                title={c.title} />)
          })}
        </div>
        <div className='bolly_post'>
          <h1 className='latest_2'>Top Posts</h1>

          {response2.filter((e) => (e.category === "Sports" && e.id === "33")).map((c) => {
            return (<div className='bolly_right'>
              <img className='bolly_img' src={c.image} alt="" />
              <h2>{c.title}</h2>
              <div className='bolly_cat'>
                <h2>{c.category}</h2>
                <p> {c.date}</p>
              </div>
            </div>
            )
          })}

          {response2.filter((e) => (e.category === "Sports")).map((c) => {
            return (
              <Block3
                ids={c.id}
                imgUrl={c.image}
                title={c.title}
                date={c.date}
                description={c.description}
                category={c.category}
              />)
          })}
          <div className='adv'>Advertisement</div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Sports;