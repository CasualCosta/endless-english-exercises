import React, {useState} from 'react'

const QuestionCard = ({number, question}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    const [userAnswer, setUserAnswer] = useState('')
    const [checking, setChecking] = useState(-1)
    const [checkText, setCheckText] = useState('Check')
    const {prompt, answer} = question;

    const handleSubmit = (e) => {
        e.preventDefault();
        const correct = userAnswer === answer;
        setChecking(correct ? 1 : 0)
        setCheckText(correct ? 'Right' : 'Wrong')
    }
    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    }

    const type = (e) => {
        setUserAnswer(e.target.value)
        if(checking >= 0)
            setChecking(-1)
        if(checkText !== 'Check')
            setCheckText('Check')
    }

    const getClassName = () => {
        if(checking === 1)
            return 'check-right'
        if(checking === 0)
            return 'check-wrong'
        return ''
    }

    return (
        <div className='question-card'>
            <div className='input-div'>
                <p>{number}. </p>
                <form onSubmit={handleSubmit}>
                    <input className='question-input'
                        type='text'
                        value={userAnswer}
                        onChange={(e) => type(e)}
                        />
                </form>
            </div>
            <p className='prompt'>{prompt}</p>
            <div className='question-buttons'>
                <button type='button' className={getClassName()} onClick={handleSubmit}>{checkText}</button>
                <button type='button' onClick={toggleAnswer}>{showAnswer ? 'Hide' : 'Show'}</button>
            </div>
            <p className='answer'>{showAnswer ? answer : ' '}</p>
        </div>
    )
}

export default QuestionCard