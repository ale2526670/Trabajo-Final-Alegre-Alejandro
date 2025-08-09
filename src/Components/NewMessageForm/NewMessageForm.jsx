import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        addNewMessage(new_message_text)
        event.target.message.value = ''
    }
    return (
        <form onSubmit={handleSubmitSendMessageForm} className='new-message-form'>
            <div className="new-message">
                <label htmlFor="message" className='new-message-label'>Escribe un mensaje:</label>
                <i className="bi bi-plus-lg"></i>
                <i className="bi bi-emoji-grin"></i>
                <input type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
            </div>
            <button type='submit' className="button-primary"><i class="bi bi-arrow-right-circle"></i></button>
        </form>
    )
}

export {NewMessageForm}