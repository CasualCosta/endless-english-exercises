import React from 'react'
import LessonCard from './LessonCard'
import cardData from '../database/cardData'
import { Link } from 'react-router-dom'

const LessonCardSection = () => {
  return (
    <section className='lesson-card-section'>
        <h2 className='lesson-card-section__title'>Lessons</h2>
        <div className='lesson-cards-container'>
            {cardData.map(card => {
                return <LessonCard key={card.id} card={card} />
            })}
        </div>
    </section>
  )
}

export default LessonCardSection