import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import {NewMessageForm} from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'


const ChatScreen = () => {
	const {contact_id} = useParams()
	const contact_selected = getContactById(contact_id)
    const [messages, setMessages] = useState(contact_selected.messages)
	const deleteMessageById = (message_id) => {
		const new_message_list = []
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message)
			}
		} 
		setMessages(new_message_list)
	}
	const addNewMessage = (text) => {
		const now = new Date();
		const horaActual = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
		const new_mesage = {
			emisor: 'YO',
			hora: horaActual,
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		const cloned_messages_list = [...messages]
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}
	const deleteAllMessages = () => {
		setMessages([])
	}
    return (
        <div className="chat-screen">
            <div className="chat-screen__container"> 
				<div className='chat-screen__header'>
					<img src={contact_selected.avatar} alt="Avatar" className="chact-screen__avatar" />
					<h1 className="chat-screen__title">{contact_selected.name}</h1>
				</div>
				<div className="chat-screen__icons">
					<div className='chat-screen-camera'>
						<i className="bi bi-camera-video"></i>
						<i className="bi bi-chevron-down"></i>
					</div>
					<i className="bi bi-search"></i>
					<i className="bi bi-three-dots-vertical"></i>
				</div>
				
			</div>
			{
				messages.length > 0
				&&
				<button onClick={deleteAllMessages} className="button-danger">Borrar todos los mensajes</button>
			}
			<div className="chat-screen__messages">
				<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
			</div>
			<NewMessageForm addNewMessage={addNewMessage}/>
        </div>
    )
}



export default ChatScreen