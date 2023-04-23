import React from 'react'
import QuestionCard from './QuestionCard';

const ActivityCard = ({activity, index}) => {
    const {description, example, getQuestion, amount } = activity;
    const questionAmount =  amount ? amount : 3;
    const questions = [];

    for(let i = 0; i < questionAmount; i++)
        questions.push(getQuestion());
    return (
        <div>
            <h3>{index + 1}. {description}</h3>
            <h4>{example.answer} ({example.prompt})</h4>
            <div className='activity-card'>
                {questions.map((question, index) => {
                    return <QuestionCard key={index} number={index + 1} question={question} />
            })}
            </div>
        </div>
    )
}

export default ActivityCard