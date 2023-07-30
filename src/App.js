import { useDevice } from 'hooks/mediaQuery/useDevice'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import { worker } from './__mock__/handler'
import router from './routes/router'
import theme from './styles/theme'

export const queryClient = new QueryClient()

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker.start()
	}

	const media = useDevice()

	return (
		<>
			<ThemeProvider theme={{ ...theme, ...media }}>
				<QueryClientProvider client={queryClient}>
					<RecoilRoot>
						<RouterProvider router={router} />
					</RecoilRoot>
				</QueryClientProvider>
			</ThemeProvider>
		</>
	)
}

export default App
