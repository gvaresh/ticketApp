import React, { useState, useEffect } from "react";
export default function TicketForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");
  const priorityLable = {
    1: "High",
    2: "Medium",
    3: "Low",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = e => {
    //deniying defaut behaviour reloading  when form submitted
    e.preventDefault();
    const formValues = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };
    dispatch({ type: "ADD_TICKET", payload: formValues });
    console.table(formValues);
    clearForm();
  };
  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          className="form-input"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend>priority</legend>
        {Object.entries(priorityLable).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              className="prioriry-input"
              onChange={e => setPriority(e.target.value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
