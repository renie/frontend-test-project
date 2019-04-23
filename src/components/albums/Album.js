import React from 'react';
import './album.css'

const Album = ({album}) => {
  return (
    <li className="album">{album.title}</li>
  )
}

export default Album
