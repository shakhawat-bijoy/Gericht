import React from 'react'
import Breadcrumb from '../Breadcrumb'

const AboutHeader = ({text, className}) => {
  return (
    <div className="header m-auto">
        <h2 className={`${className} `}>{text}</h2>
        <Breadcrumb/>
    </div>

  )
}

export default AboutHeader