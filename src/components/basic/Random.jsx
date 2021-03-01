import React from 'react';

function Random(props) {

  const { min, max } = props;

  const random = parseInt(Math.random() * (max - min)) + min;

  return (
    <div>
      <h2>Random value</h2>
      <p><strong>Min Value: </strong> {min}</p>
      <p><strong>Max Value:</strong> {max}</p>
      <p><strong>Random Value:</strong> {random}</p>
    </div>
  )
}

export default Random
