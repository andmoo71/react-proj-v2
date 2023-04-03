import React from "react";
import Card from "./Card";

const CardList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((user, i) => {
        return (
          <Card
            key={i}
            id={dogs[i].id}
            name={dogs[i].name}
            email={dogs[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
