import React, {useState} from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes,useLocation } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'

const App = () => {
const location = useLocation();
	return (
		<div className="app">
			<Routes>
				<Route
					path='/'
					element={<ContactScreen/>}
				/>
				<Route
					path='/contact/:contact_id/messages'
					element={
					<div className="app-container"key={location.key}>
						<ContactScreen />
						<ChatScreen />
					</div>
					}
				/>
			</Routes>
		</div>
	)
}


export default App