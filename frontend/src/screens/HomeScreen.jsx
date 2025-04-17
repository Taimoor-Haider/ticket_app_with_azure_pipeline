import React, { useEffect } from "react";
import TicketCard from "../components/TicketCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets, ticketListSelector } from "../features/ticketListSlice";
function HomeScreen() {
  const { loading, error, tickets } = useSelector(ticketListSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className="container py-5">
      {loading && <p>Loading tickets...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {tickets?.map((ticket) => (
          <div className="col-md-4" key={ticket.id}>
            <TicketCard ticket={ticket} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
