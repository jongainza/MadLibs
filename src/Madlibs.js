import React, { useState } from "react";
import MadlibsForm from "./MadlibsForm";

const Madlib = () => {
  const initialData = { noun: "", noun2: "", adjective: "", color: "" };
  const [formData, setFormData] = useState(initialData);
  const [madlib, setMadlib] = useState("");

  const createStory = (data) => {
    const Story = `There was a ${data.color} ${data.noun} who loved ${data.adjective} ${data.noun2}.`;
    setMadlib(Story);
    setFormData(initialData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = () => {
    setMadlib("");
  };

  return (
    <div className="Madlib">
      <h1>Madlibs!</h1>
      {!madlib ? (
        <MadlibsForm
          formData={formData}
          handleChange={handleChange}
          createStory={createStory}
        />
      ) : (
        <div>
          <p>{madlib}</p>
          <button onClick={reset}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Madlib;
