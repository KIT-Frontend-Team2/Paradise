import { rest } from 'msw'

import API_KEY from '../../consts/ApiKey'
import searchPageMock from '../datas/searchPage.mock'
import searchUserPageMock from '../datas/searchUserPage.mock'

export const searchList = rest.get(
	API_KEY.API + API_KEY.PRODUCT + API_KEY.SEARCH,
	async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(searchPageMock))
	},
)

export const searchUserList = rest.get(
	API_KEY.SEARCH + API_KEY.USER + '/:username',
	async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(searchUserPageMock))
	},
)
