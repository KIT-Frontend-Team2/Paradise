import { rest } from 'msw'

import API_KEY from '../../consts/ApiKey'
import sideBarMock from '../datas/sideBar.mock'

export const getList = rest.get(
	API_KEY.API + API_KEY.PRODUCT + API_KEY.VIEWLIST,
	async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(sideBarMock))
	},
)

export const postList = rest.post(
	API_KEY.API + API_KEY.PRODUCT + API_KEY.VIEWLIST,
	async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ message: 'success' }))
	},
)

export const deleteList = rest.delete(
	API_KEY.API + API_KEY.PRODUCT + API_KEY.VIEWLIST,
	async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ message: `delete success` }))
	},
)
