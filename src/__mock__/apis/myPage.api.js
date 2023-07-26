import { rest } from 'msw'

import { myPageMock } from '../datas/myPage.mock'

export const getMyPage = rest.get('/mypage', (_, res, ctx) => {
	return res(ctx.status(200), ctx.json(myPageMock))
})
