import { rest } from 'msw'

import ApiKey from '../../consts/ApiKey'
import productMock from '../datas/product.mock'

export const postRegisterProduct = rest.post(
	ApiKey.PRODUCT + ApiKey.UPDATE,
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(productMock))
	},
)

export const postWishAdd = rest.post(
	ApiKey.PRODUCT + ApiKey.LIKE + '/:ProductId',
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(productMock))
	},
)

export const patchProductInfo = rest.patch(
	ApiKey.PRODUCT + ApiKey.UPDATE + '/:ProductId',
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(productMock))
	},
)

export const deleteProduct = rest.delete(
	ApiKey.PRODUCT + ApiKey.UPDATE + '/:ProductId',
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(productMock))
	},
)

export const postCompleteProduct = rest.post(
	ApiKey.PRODUCT + ApiKey.UPDATE + '/:ProductId',
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(productMock))
	},
)
