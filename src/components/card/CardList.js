import React from 'react'
import Card from './Card'

import './cardList.css'

const CardList = ({ users = [] }) => {
  return (
    <ul className="cardList">
    {
      users.map((user, index) => (
        <Card key={user.id} user={user} />
      ))
    }
    </ul>
  )
}

export default CardList
