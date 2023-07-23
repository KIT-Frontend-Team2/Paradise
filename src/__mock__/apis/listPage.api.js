import { rest } from 'msw'

import listPageMock from '../datas/listPage.mock'

export const getList = rest.get('/list/:filter', async (req, res, ctx) => {
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
})
