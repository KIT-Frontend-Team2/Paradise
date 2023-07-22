import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import { worker } from './__mock__/handler'
import router from './routes/router'
import theme from './styles/theme'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker.start()
	}
	const queryClient = new QueryClient()

	return (
		<>
			<ThemeProvider theme={theme}>
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
