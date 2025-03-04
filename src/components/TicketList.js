import React from "react";
import TicketItem from "./TcketItems";

export default function TicketList({ tickets, dispath }) {
  return (
    <div className="ticket-list">
      {tickets?.map(ticket => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          dispath={dispath}
        ></TicketItem>
      ))}
    </div>
  );
}
