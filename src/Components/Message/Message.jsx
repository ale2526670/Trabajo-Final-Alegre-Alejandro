import React, { useState } from 'react'
const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {
	const [message_selected, setMessageSelected] = useState(false)
	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}
	const isUser = emisor === 'YO';
	return (
		<div onContextMenu={handleChangeMessageSelected} className={`message ${isUser ? 'message--right' : 'message--left'}`}>
			<p className="message-text">{texto}</p>
			<span className="message-hour">{hora}</span>
			<i className="bi bi-check-all"></i>
			{
				message_selected && <button onClick={() => {deleteMessageById(id)}} className="button-danger-2"><i className="bi bi-trash"></i></button>
			}
		</div>
	)
}
export default Message