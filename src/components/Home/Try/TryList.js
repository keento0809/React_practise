import React from "react";

const TryList = (props) => {
  const personsList = props.persons.map((person, index) => {
    return (
      <li key={index}>
        <p>{person.name}</p>
        <p>{person.height}</p>
        <p>{person.mass}</p>
        <p>{person.birthYear}</p>
      </li>
    );
  });
  return <ul>{personsList}</ul>;
};

export default TryList;
