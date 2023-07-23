import { setupWorker } from 'msw'

import * as detailApi from './apis/detailPage.api'
import * as listApi from './apis/listPage.api'
import * as mainApi from './apis/mainPage.api'

const handler = [
	...Object.values(detailApi),
	...Object.values(listApi),
	...Object.values(mainApi),
]
export const worker = setupWorker(...handler)
