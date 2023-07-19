import React from 'react'
import { Link } from 'react-router-dom'


const LessonCard = ({ card }) => {
    const { id, image, title, vocabulary, grammar} = card
    return (
    <Link className='lesson-card lesson-card__bg-img' to={`/lesson/${id}`}> 
        <img src={image} alt='' loading='lazy' />
        <h2>{title}</h2>
        <div>
            {vocabulary.map((voc, index) => {
                return <p key={index}>{voc}</p>
            })}
        </div>
        <div>
            {grammar.map((gram, index) => {
                return <p key={index}>{gram}</p>
            })}
        </div>
    </Link>
  )
}

export default LessonCard