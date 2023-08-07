const Key = 'autoLogin'

export const setCookie = function (value, expiredDay) {
	const expired = new Date()
	expired.setTime(expired.getTime() + expiredDay * 24 * 60 * 60 * 1000)

	const jsonValue = JSON.stringify(value)
	document.cookie =
		Key +
		'=' +
		encodeURIComponent(jsonValue) +
		';expires=' +
		expired.toUTCString() +
		';path=/'
}

export const getCookie = function () {
	let value = RegExp('(^|;) ?' + Key + '=([^;]*)(;|$)').exec(document.cookie)
	return value ? JSON.parse(decodeURIComponent(value[2])) : null
}

export const deleteCookie = function () {
	document.cookie = Key + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
}
