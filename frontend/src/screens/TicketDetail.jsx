import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import {
  fetchTicket,
  ticketDetailSelector,
} from "../features/ticketDetailSlice";

function TicketDetail() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, ticket } = useSelector(ticketDetailSelector);

  useEffect(() => {
    if (!state.ticket) {
      dispatch(fetchTicket(id));
    } else {
    }
  }, [id, dispatch]);

  if (loading) return <p>Loading ticket...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;
  if (!ticket) return <p>No ticket found.</p>;

  return (
    <div className="container py-5">
      <Button variant="primary" className="mb-3" onClick={() => navigate(-1)}>
        Back
      </Button>
      <h1>{ticket.title}</h1>
      <p>
        <strong>Location:</strong> {ticket.location}
      </p>
      <p>
        <strong>Date:</strong> {new Date(ticket.date).toLocaleString()}
      </p>
      <p>
        <strong>Price:</strong> {ticket.currency} {ticket.price}
      </p>
      <p>
        <strong>Seat Type:</strong> {ticket.seatType}
      </p>
      <p>
        <strong>Organizer:</strong> {ticket.organizer}
      </p>
      <p>
        <strong>Description:</strong> {ticket.description}
      </p>
      <button className="btn btn-success mt-3">Proceed to Checkout</button>
    </div>
  );
}

export default TicketDetail;
