import React from "react";

export default function TicketItem({ ticket, dispath }) {
  const { id, title, description, prioruty } = ticket;
  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>

      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="button"
        onClick={() => dispath({ type: "DELETE_TICKET", payload: { id } })}
      >
        Delete
      </button>
      <button
        className="button"
        onClick={() => dispath({ type: "SET_EDITING_TICKET", payload: ticket })}
      >
        Edit
      </button>
    </div>
  );
}
