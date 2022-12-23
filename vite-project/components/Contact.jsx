import React from 'react'
import whiskerson from './src/images/mr-whiskerson.png'
import phoneIcon from './src/images/phone-icon.png'
import mailIcon from './src/images/mail-icon.png'

export default function Contact(props) {
  console.log(props)
  return (
    <div>
      <div className="contact-card">
        <img src={props.img}/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src={phoneIcon} />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src={mailIcon} />
            <p>{props.email}</p>
        </div>
      </div>
    </div>
  )
}