import React from 'react'

const Card = ({ name, email, id }) => {
    return (
      <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://picsum.photos/id/${id}/200/200`} alt="placeholder" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;