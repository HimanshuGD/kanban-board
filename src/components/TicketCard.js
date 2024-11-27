import React from 'react';
import '../styles/TicketCard.css';
import optionss from '../assets/3 dot menu.svg'


const TicketCard = ({ ticket, userName }) => {
    return (
        <div className="ticket-card">
            <div className="ticket-card-header">
                <div>
                <span className="ticket-id" style={{display:'block', opacity: '0.4'}}>{ticket.id}</span>
                </div>
                <span className="ticket-title" style={{display:'block' }}>{ticket.title}</span>
            </div>
            <div className="ticket-card-body">
                <p className="ticket-type">{ticket.type}</p>
                {userName && <p className="ticket-user">Assigned to: {userName}</p>}
                <p className="feature-request-wrapper">
                    <span className="feature-image-box">
                        <img src={optionss} alt="Feature Request" className="feature-image" />
                    </span>
                    <span className="feature-text-box">
                        Feature Request
                    </span>
                </p>

            </div>
        </div>
    );
};

export default TicketCard;
