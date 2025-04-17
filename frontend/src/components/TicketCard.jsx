import { useNavigate } from "react-router-dom";
const TicketCard = ({ ticket }) => {
  const { title, category, location, date, price, currency } = ticket;

  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/ticket/${ticket.id}`, { state: { ticket } }); // Passing ticket as state
  };
  const formattedDate = new Date(date).toLocaleString(); // format the date to a readable format

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <strong>Category:</strong> {category}
        </p>
        <p className="card-text">
          <strong>Location:</strong> {location}
        </p>
        <p className="card-text">
          <strong>Date:</strong> {formattedDate}
        </p>
        <p className="card-text">
          <strong>Price:</strong> {price} {currency}
        </p>
        <button className="btn btn-primary pointer" onClick={handleBuyClick}>
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
