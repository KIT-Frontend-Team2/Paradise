import { rest } from 'msw'

import API_KEY from '../../consts/ApiKey'
import listPageMock from '../datas/listPage.mock'

export const getList = rest.get(
	API_KEY.API + API_KEY.PRODUCT + API_KEY.SEARCH + '/:filter',
	async (req, res, ctx) => {
		const { filter } = req.params

		switch (filter) {
			case 'all':
				return res(ctx.status(200), ctx.json(listPageMock.allProductList))
			case 'sell':
				return res(ctx.status(200), ctx.json(listPageMock.sellProductList))
			case 'free':
				return res(ctx.status(200), ctx.json(listPageMock.freeProductList))
			default:
				return res(ctx.status(404))
		}
	},
)
