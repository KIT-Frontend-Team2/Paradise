export const formatNumberToMoney = number => {
	return number === 0 ? 0 : number.toLocaleString()
}

// 금액 형태의 문자열 -> 숫자로 변환
export const moneyToFormatNumber = money => {
	if (typeof money === 'number') {
		return money
	}
	let number = money.replace(/\D/g, '')
	number = Number(number)
	return number
}

export const dateFomatter = prevDate => {
	const selectYears = new Date(prevDate)
	const year = selectYears.getFullYear()
	const month = selectYears.getMonth() + 1
	const date = selectYears.getDate()

	return `${year}-${month >= 10 ? month : '0' + month}-${
		date >= 10 ? date : '0' + date
	}`
}
