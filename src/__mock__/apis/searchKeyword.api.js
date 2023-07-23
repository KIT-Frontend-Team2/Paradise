import { rest } from 'msw'

import searchPageMock from '../datas/searchPage.mock'

export const searchList = rest.get('/search/:keyword', async (_, res, ctx) => {
	return res(ctx.status(200), ctx.json(searchPageMock))
})
