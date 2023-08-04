const getMonthPriceAvg = (dataArray, monthArray) => {
	const dateArray = monthArray.map(month => month.slice(0, 7))
	const arrayLengths = dateArray.map(
		date => dataArray.filter(item => date === item.date.slice(0, 7)).length,
	)
	const avgPrices = dateArray.map(date =>
		dataArray
			.filter(item => date === item.date.slice(0, 7))
			.reduce((acc, curr) => acc + Number(curr.avgPrice), 0),
	)
	const monthlyAvgPrices = avgPrices.map((price, i) =>
		Math.floor(price / arrayLengths[i]),
	)
	const monthNames = monthArray.map(month => {
		return Number(month.split('-')[1]) + '월'
	})

	return monthNames.map((name, i) => ({ name, 평균가: monthlyAvgPrices[i] }))
}

export default getMonthPriceAvg
