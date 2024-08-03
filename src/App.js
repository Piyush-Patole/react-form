import "./App.css";
import { React, useState } from 'react';

function App(){

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [skills, setSkills] = useState({
    python: true,
    java: false,
    javascript: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      skills,
      resume,
      url,
      about
    );
  };

  const handleSkillChange = (sub) => {
    setSkills((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSkills({
        python: true,
        java: false,
        javascript: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
};

  return(<div className="App">
    <h1>Form using React</h1>
    <fieldset>
      <form action="#" method="get">
        <label for="firstname"> First Name*</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}
          onChange={(e)=> setFirstName(e.target.value)}
          placeholder="Enter first name"
          required
        />
        <label for="lasttname"> Last Name*</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastName}
          onChange={(e)=> setLastName(e.target.value)}
          placeholder="Enter Last name"
          required
        />
        <label for="email">Enter email*</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <label for="tel">Contact no.*</label>
        <input
          type="tel"
          name="tel"
          id="contact"
          value={contact}
          onChange={(e)=> setContact(e.target.value)}
          placeholder="Enter contact no."
          required
        />
        <label for="gender">Gender*</label>
        <input 
          type="radio"
          name="gender"
          value="male"
          id="male"
          checked={gender === "male"}
          onChange={(e)=> setGender(e.target.value)}
        />
        Male
        <input 
          type="radio"
          name="gender"
          value="female"
          id="female"
          checked={gender === "female"}
          onChange={(e)=> setGender(e.target.value)}
        />
        Female
        <input 
          type="radio"
          name="gender"
          value="other"
          id="other"
          checked={gender === "other"}
          onChange={(e)=> setGender(e.target.value)}
        />
        Other
        <label for="Skills">Your Skills</label>
        <input
          type="checkbox"
          name="skill"
          id="python"
          checked={skills.python === true}
          onChange={(e)=>handleSkillChange("python")}
        />
        Python
        <input
          type="checkbox"
          name="skill"
          id="java"
          checked={skills.java === true}
          onChange={(e)=>handleSkillChange("java")}
        />
        Java
        <input
          type="checkbox"
          name="skill"
          id="js"
          checked={skills.js === true}
          onChange={(e)=>handleSkillChange("js")}
        />
        JavaScript
        <label for="file">Upload Resume*</label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e)=>setResume(e.target.value)}
          placeholder="Enter updated resume"
          required
        />
        <label>Select your choices</label>
        <select
          name="select"
          id="select"
          value={selectedOption}
          onChange={(e)=>setSelectedOption(e.target.value)}
        >
          <option
            value=""
            disabled
            selected={selectedOption===""}
          >Select your Ans</option>
          <optgroup label="Beginners">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JS</option>
          </optgroup>
          <optgroup label="Advance">
            <option value="1">Express</option>
            <option value="2">Node</option>
            <option value="3">React</option>
            <option value="4">MongoDB</option>
          </optgroup>
        </select>
          <label for="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e)=>setAbout(e.target.value)}
            placeholder="About your self"
            required
          >
          </textarea>
          <button
            type="reset"
            value="reset"
            onClick={()=>handleReset()}
          >Reset</button>
          <button
            type="submit"
            value="submit"
            onClick={(e)=>handleSubmit(e)}
          >Submit</button>
      </form>
    </fieldset>
  </div>);
}

export default App;