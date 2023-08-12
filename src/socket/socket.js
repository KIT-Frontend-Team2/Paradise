import { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socketContext = createContext()
export const useSocket = () => useContext(socketContext)

const SocketProvider = ({ children }) => {
	const [socket, setSocket] = useState(null)
	useEffect(() => {
		const socket = io.connect(process.env.REACT_APP_BASE_URL)

		setSocket(socket)
	}, [])

	return (
		<socketContext.Provider value={socket}>{children}</socketContext.Provider>
	)
}

export default SocketProvider
