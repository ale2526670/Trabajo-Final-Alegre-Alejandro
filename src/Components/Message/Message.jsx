import React, { useState } from 'react';
const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
	const [message_selected, setMessageSelected] = useState(false);
	const handleChangeMessageSelected = (e) => {
		e.preventDefault();
		setMessageSelected(true);
	}
	const isUser = emisor === 'YO';
	return (
		<div onContextMenu={handleChangeMessageSelected}className={`message ${isUser ? 'message--right' : 'message--left'}`}>
			<div className="message__bubble">
				<p className="message__text">{texto}</p>
				<div className="message__meta">
					<span className="message__hour">{hora}</span>
					<i className={`bi ${status === 'visto' ? 'bi-check-all' : 'bi-check'}`}></i>
				</div>
			</div>
			{message_selected && (
				<button onClick={() => deleteMessageById(id)} className="button-danger-2">
					<i className="bi bi-trash"></i>
				</button>
			)}
		</div>
	);
};

export default Message;