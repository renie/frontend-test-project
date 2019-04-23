import React from 'react';
import PostList from '../posts/PostList'
import AlbumList from '../albums/AlbumList'
import './card.css';


const Card = ({user, toggleCard}) => {
  return (
    <li className={'card' + (user.isHidden ? ' hidden' : '')}>
      <header onClick={toggleCard} title="Click to toggle card" role="button">
        <h3>{user.name}</h3>
      </header>
      <div className="body">
        <dl>
          <dt>E-mail:</dt>
          <dd><a href={"mailto:" + user.email}>{user.email}</a></dd>
          <dt>Company:</dt>
          <dd>{user.company.name}</dd>
          <PostList userId={user.id} />
          <AlbumList userId={user.id} />
        </dl>
      </div>
    </li>
  );
}

export default Card;
