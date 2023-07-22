import { rest } from 'msw'

import HeaderMock from '../datas/header.mock'

export const handler = rest.get('/api/header', (_, res, ctx) => {
	return res(ctx.status(200), ctx.json(HeaderMock))
})
