import { rest } from 'msw'

import API_KEY from '../../consts/ApiKey'
import detailPageMock from '../datas/detailPage.mock'

export const getTodo = rest.get(
	API_KEY.API + API_KEY.PRODUCT + API_KEY.DETAIL,
	async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(detailPageMock))
	},
)
