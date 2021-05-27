import React, { useReducer } from "react";
import { myPeopleReducer } from "./reducers/myPeopleReducer";

const peopleArray = [
  { name: "Jay", alive: true },
  { name: "Kailee", alive: true },
  { name: "John", alive: true },
  { name: "Mia", alive: true },
];
function People() {
  const [state, dispatch] = useReducer(myPeopleReducer, peopleArray);

  function devour(name) {
    dispatch({ type: "chomp", payload: name });
  }
  function spitOut(name) {
    dispatch({ type: "revive", payload: name });
  }

  return (
    <div>
      <h1>People List</h1>
      {state.map((person, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-around",
          }}
        >
          <div>{person.name}</div>
          {person.alive ? (
            <div>
              {" "}
              ✨✨ ALIVE! ✨✨{" "}
              <button onClick={() => devour(person.name)}>
                {" "}
                🐊 DEVOUR 🐊{" "}
              </button>{" "}
            </div>
          ) : (
            <div>
              {" "}
              ☠ ☠ DEAD ☠ ☠{" "}
              <button onClick={() => spitOut(person.name)}>
                {" "}
                🥵 SPIT OUT 🥵{" "}
              </button>{" "}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default People;
