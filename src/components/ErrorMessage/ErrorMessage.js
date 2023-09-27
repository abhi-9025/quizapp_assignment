import React from 'react'
import './ErrorMessage.css'
const ErrorMessage = ({children}) => {
  return (
    <div className='ErrorMessage__container'>{children}</div>
  )
}

export default ErrorMessage