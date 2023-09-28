import React, { useEffect } from 'react'
import './Result.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
const Result = ({name,score}) => {
  const navigate=useNavigate()
    useEffect(()=>{
         if(!name){
              navigate('/')
         }

    },[name,navigate])

  return (
    <div className='result__container'>
        <span className='result__title'>Hey {name} Your Final Score is: {score}</span>
        <Button
        variant='contained'
        color='secondary'
        size='medium'
        style={{alignSelf:'center',marginTop:20}}
        href='/'
        
        >GoTo Homepage</Button>
    </div>
  )
}

export default Result