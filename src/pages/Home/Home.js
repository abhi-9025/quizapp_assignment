import React from 'react'
import './Home.css'
import quizimg from '../../assets/images/quiz.jpeg'
const Home = () => {
  return (
    <div className='home__container'>
      <div className='home__quiztype' > 
        <span style={{fontSize:26}}>Quiz type</span>

       <div className='home__selectQuizType'>

       </div>
      </div>
      <img src={quizimg} className='home__banner' alt='quiz image'/>
        </div>
  )
}

export default Home