import {ThemeProvider} from 'styled-components'
import {RecoilRoot} from 'recoil'
import theme from '../src/styles/theme'
import {BrowserRouter} from 'react-router-dom'
import {QueryClientProvider} from "react-query";
import {queryClient} from "../src/App";

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export const decorators = [
    (Story) => (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <RecoilRoot>
                        <Story/>
                    </RecoilRoot>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    ),
]

export default preview
