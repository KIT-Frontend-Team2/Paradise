import { dateFomatter } from './formatter'

const getStartAndEndDate = () => {
	let nowDate = new Date()

	return new Array(5).fill('').map((v, i) => {
		let date = new Date()
		date.setDate(1)
		if (i === 4) {
			date.setDate(0)
		}
		date.setMonth(nowDate.getMonth() - 5 + i)
		return dateFomatter(date)
	})
}

export default getStartAndEndDate
