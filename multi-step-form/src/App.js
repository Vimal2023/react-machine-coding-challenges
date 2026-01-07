import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "PASSWORD",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "",
    },
  ];
  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("Form submitted");
      setIsFormSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };
  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };
  return (
    <div className="App">
      {!isFormSubmitted ? (
        <form className="container" onSubmit={handleSubmit}>
          {index > 0 && (
            <a href="/" onClick={handleBack}>
              Back
            </a>
          )}
          <label>{forms[index].label}</label>
          <input
            value={formData[forms[index].id]}
            id={forms[index].id}
            type={forms[index].inputType}
            placeholder={forms[index].placeholder}
            onChange={handleInputChange}
          />
          <button>{forms[index].buttonName}</button>
        </form>
      ) : (
        <div>
          <h1>Success !</h1>
          <hr />
          <span> Name : {formData.name}</span>
          <hr />
          <span> Email : {formData.email}</span>
          <hr />
          <span> DOB : {formData.dob}</span>
          <hr />
          <span> Password : {formData.password}</span>
          <hr />
        </div>
      )}
    </div>
  );
}

export default App;
