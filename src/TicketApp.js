import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./old/reducers/ticketReducer";
import TicketList from "./components/TicketList";
function TicketApp() {
  const initialState = { tickets: [], editingTicket: null };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <TicketList
              tickets={state.tickets}
              dispath={dispatch}
            ></TicketList>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
export default TicketApp;
