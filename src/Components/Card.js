import React from 'react'

const Card = ({ name, email, id }) => {
    return (
      <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 dim">
        <img
          src={`https://random-d.uk/api/${id}.jpg`}
          alt="placeholder"
          width="300"
          height="200"
        />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;