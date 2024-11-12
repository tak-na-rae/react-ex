import React from "react";

const Cpnt = () => {
  const person = [
    { name: "Kim", age: 18 },
    { name: "Lee", age: 19 },
    { name: "Park", age: 20 },
  ];

  return (
    <ul className="person_list">
      {person.map((el, idx) => (
        <li key={idx}>
          {el.name} {el.age}
        </li>
      ))}
    </ul>
  );
};

export default Cpnt;
