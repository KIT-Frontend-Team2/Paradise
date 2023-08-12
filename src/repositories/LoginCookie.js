const Key = 'isLogin'
const expiredDay = 1
export const setLogin = function () {
	const expired = new Date()
	expired.setTime(expired.getTime() + expiredDay * 60 * 60 * 1000)

	const jsonValue = JSON.stringify(true)
	document.cookie =
		Key +
		'=' +
		encodeURIComponent(jsonValue) +
		';expires=' +
		expired.toUTCString() +
		';path=/'
}

export const getLogin = function () {
	let value = RegExp('(^|;) ?' + Key + '=([^;]*)(;|$)').exec(document.cookie)
	return value ? JSON.parse(decodeURIComponent(value[2])) : null
}

export const deleteLogin = function () {
	document.cookie = Key + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
}
