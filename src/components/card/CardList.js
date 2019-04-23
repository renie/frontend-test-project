import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import './cardList.css'

const CardList = ({ users = [] }) => {
  return (
    <ul className="cardList">
    {
      users.map((user, index) => (
        <Card key={index} {...user} />
      ))
    }
    </ul>
  );
}

export default CardList;
