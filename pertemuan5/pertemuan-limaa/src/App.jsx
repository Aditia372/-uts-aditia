import { useState } from "react";
import "./App.css";


function App() {
  const [person, setPerson] = useState({
    firstName : "Aditia",
    lastName : "Oman",
  });
  // const handleFirstName = (e) => {
  //   // person.firstName = e.target.value;
  //   setPerson({
  //     ...person,
  //     firstName:e.target.value
  //   })
  // }
  // const handleLastName = (e) => {
  //   // person.lastName = e.target.value;
  //   setPerson({
  //     ...person,
  //     lastName:e.target.value
  //   })
  // }
  const handleChange = (e) => {
    setPerson({
          ...person,
          [e.target.name] : e.target.value
    })
  }
  return (
    <div>
      <form action="">
      <label htmlFor="">
        Nama Depan : 
        <input name = "firstName" value={person.firstName} onChange={handleChange}/>
      </label><br />
      <label htmlFor="">
        Nama Belakang : 
        <input name="lastName" value={person.lastName} onChange={handleChange}/>
      </label>
      </form>
      <p>
        {person.firstName}, {person.lastName}
      </p>
    </div>
  );
}
export default App;
