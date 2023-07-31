import { useDevice } from 'hooks/mediaQuery/useDevice'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import { worker } from './__mock__/handler'
import { DEV } from './consts/api'
import router from './routes/router'
import theme from './styles/theme'

export const queryClient = new QueryClient({
	defaultOptions: { queries: { suspense: true } },
})

function App() {
	if (DEV) {
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
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</ThemeProvider>
		</>
	)
}

export default App
