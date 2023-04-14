import { React, useEffect } from 'react'
import ActivityCard from './ActivityCard';
import { useParams } from 'react-router-dom'
import data from '../database/lessonData';

const Lesson = () => {
  const id = useParams().id
  const lesson = data[parseInt(id)]

  const { title, activities } = lesson;

  useEffect(() => {
    window.scrollTo(0,0)
  })
  
  return (
    <section>
      <h2>{title}</h2>
      {activities.map((activity, index) => {
        return <ActivityCard key={index} activity={activity} index={index} />
      })}
    </section>
  )
}

export default Lesson