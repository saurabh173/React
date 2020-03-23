import React from "react";
import firebase from './firebase'

export const UserCard = ({ user }) => {
  const [firstName, setName] = React.useState(user.firstName);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('users').doc(user.id).set({...user, firstName})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('users').doc(user.id).delete()
  }

  return (
    <>
      <input
        value={firstName}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};
