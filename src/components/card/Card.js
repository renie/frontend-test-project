import React from 'react';
import PropTypes from 'prop-types';
import './card.css';


const Card = user => {
  return (
    <li className='card'>
      <header>
        <h3>{user.name}</h3>
      </header>
      <div>
        <dl>
          <dt>E-mail:</dt>
          <dd><a href={"mailto:" + user.email}>{user.email}</a></dd>
          <dt>Company:</dt>
          <dd>{user.company.name}</dd>
        </dl>
      </div>
    </li>
  );
}

export default Card;
