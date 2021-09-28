import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      //id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.tel}
      mail={contact.mail}
    />
  );
}

function App() {
  //console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        mail={contacts[0].mail}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        mail={contacts[1].mail}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        mail={contacts[2].mail}
      />   */}
    </div>
  );
}

export default App;
