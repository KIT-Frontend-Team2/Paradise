import { rest } from 'msw'

import searchPageMock from '../datas/searchPage.mock'

export const searchList = rest.get('/search', async (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(searchPageMock))
})
