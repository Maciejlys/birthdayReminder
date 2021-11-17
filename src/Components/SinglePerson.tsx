import React from "react";

interface SinglePersonProps {
  id: number;
  name: string;
  age: number;
  image: string;
}

export const SinglePerson: React.FC<SinglePersonProps> = ({
  name,
  age,
  image,
}) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
