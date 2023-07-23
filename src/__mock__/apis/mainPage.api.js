import { rest } from 'msw'

import mainPageMock from '../datas/mainPage.mock'

export const getMain = rest.get('/list', async (_, res, ctx) => {
	return res(ctx.status(200), ctx.json(mainPageMock))
})
