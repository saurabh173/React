import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";
import {UserCard} from './UserCard'

function App() {

  //useState returns a pair: the current state value and a function that lets you update it. 
  //You can call this function from an event handler or somewhere else.

  const [users, setUsers] = React.useState([]);
  const [newUserFirstName, setNewUserFirstName] = React.useState();

  // By using useEffect Hook, you tell React that your component needs to do something after render. 
  // React will remember the function you passed.

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);


  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("users").add({ firstName: newUserFirstName });
  };

  return (
    <ul>

      <input
        value={newUserFirstName}
        onChange={e => setNewUserFirstName(e.target.value)}
      />
      <button onClick={onCreate}>Create</button>


      {users.map(user => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
}

export default App;
