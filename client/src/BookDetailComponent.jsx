import React from 'react';

function BookDetail (props) {
  return (
    <div>
      <h1>{props.characters}</h1>
      <p>{props.author}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default BookDetail;