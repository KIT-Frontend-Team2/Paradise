import { setupWorker } from 'msw'

import * as authAPi from './apis/authPage.api'
import * as chatApi from './apis/chat.api'
import * as detailApi from './apis/detailPage.api'
import * as listApi from './apis/listPage.api'
import * as mainApi from './apis/mainPage.api'
import * as myPageApi from './apis/myPage.api'
import * as productApi from './apis/product.api'
import * as searchApi from './apis/search.api'
import * as sideBarApi from './apis/sideBar.api'

const handler = [
	...Object.values(detailApi),
	...Object.values(listApi),
	...Object.values(mainApi),
	...Object.values(searchApi),
	...Object.values(sideBarApi),
	...Object.values(myPageApi),
	...Object.values(productApi),
	...Object.values(authAPi),
	...Object.values(chatApi),
]
export const worker = setupWorker(...handler)
