import userSignupMock from '__mock__/datas/userSignup.mock'
import { rest } from 'msw'

import userLoginMock from '../datas/userlogin.mock'

export const postLogin = rest.post('/auth', (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(userLoginMock))
})

export const postSignup = rest.post('/auth', (req, res, ctx) => {
	return res(ctx.status(200, ctx.json(userSignupMock)))
})
