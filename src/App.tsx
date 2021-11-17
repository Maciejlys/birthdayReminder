import React, { useState } from "react";
import "./App.css";
import { SinglePerson } from "./Components/SinglePerson";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <section className="container">
        <h3>Today there are {people.length} birthdays</h3>
        {people.map((people) => {
          return <SinglePerson key={people.id} {...people} />;
        })}
        <button className="btn" onClick={() => setPeople([])}>
          Remove all
        </button>
      </section>
    </>
  );
}

export default App;
