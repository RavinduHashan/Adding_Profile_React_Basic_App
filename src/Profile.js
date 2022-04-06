import React, { useState, useEffect } from "react";
import ProfileList from "./components/ProfileList";

export default function Profile() {

  const [loadData, setLoadData] = useState(new Date())
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: { title: "mr", first: "Tharindu", last: "Lakmal" },
      location: { city: "Monaragala" },
      email: "lakmal@example.com",
      dob: { date: "1994-12-20T09:44:18.674Z", age: 26 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    },
    {
      id: 2,
      name: { title: "mr", first: "Vishmika", last: "Vimukthi" },
      location: { city: "Colombo" },
      email: "vimukthi@example.com",
      dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/7.jpg" },
    },
    {
      id: 3,
      name: { title: "mr", first: "Lahiru", last: "Madushanka" },
      location: { city: "Matara" },
      email: "lahiru@example.com",
      dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/5.jpg" },
    },
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api").then(response => {
      return response.json()
    }).then((responseDate) => {
      setNameList((nameList) => [...nameList, responseDate.results[0]])
    })
  },[loadData])

  const nameListComponet = () => {
    return nameList.map((aName) => {
      return (
        <ProfileList
          key={aName.id}
          name={aName.name.first + " " + aName.name.last}
          city={aName.location.city}
          email={aName.email}
          brithday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    setLoadData(new Date())
  };

  return (
    <div>
      <div className="container mt-4">
        <button className="btn btn-primary" onClick={addUserHandler}>
          Add Name
        </button>
        <ul className="list-group">{nameListComponet()}</ul>
      </div>
    </div>
  );
}
