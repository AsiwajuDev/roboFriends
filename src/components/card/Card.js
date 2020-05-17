import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib pa3 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=250x250`} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
