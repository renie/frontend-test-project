import React from 'react'
import Card from './Card'

import './cardList.css'

const CardList = ({ users, toggleCard}) => {
  return (
    <ul className="cardList">
    {
      users.map((user, index) => (
        <Card key={user.id} user={user} toggleCard={toggleCard.bind(null, user.id)}/>
      ))
    }
    </ul>
  )
}

export default CardList
