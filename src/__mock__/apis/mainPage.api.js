import { rest } from 'msw'

import API_KEY from '../../consts/ApiKey'
import mainPageMock from '../datas/mainPage.mock'

export const getMain = rest.get(
	API_KEY.API + API_KEY.PRODUCT,
	async (_, res, ctx) => {
		return res(ctx.status(200), ctx.json(mainPageMock))
	},
)
