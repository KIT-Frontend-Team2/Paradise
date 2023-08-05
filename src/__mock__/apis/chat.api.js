import chatListMock from '__mock__/datas/chatList.mock'
import API_KEY from 'consts/ApiKey'
import { rest } from 'msw'

export const getChat = rest.get(API_KEY.CHAT, async (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(chatListMock))
})

export const postChat = rest.post(API_KEY.CHAT, (req, res, ctx) => {
	const chatMessage = req.body.text
	return res(
		ctx.status(200),
		ctx.json({ message: '메시지를 업데이트했습니다.' }),
	)
})
