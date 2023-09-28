import React, { useEffect, useState } from 'react'
import './Quiz.css'
const Quiz = ({name,score,questions,setQuestions,setScore}) => {
    
    const [options,setOptions]=useState()
    const [currQuestion,setCurrentQuestion]=useState(0)
    


    useEffect(()=>{
        setOptions(questions && handleShuffleOption([questions[currQuestion]?.correct_answer,...questions[currQuestion]?.incorrect_answer]))
    },[questions])

    
    const handleShuffleOption=(optionsFromQues)=>{
        return optionsFromQues.sort(()=>Math.random()-0.5);
  }

  console.log(options)

  
  return (
    <div>Quiz</div>
  )
}

export default Quiz