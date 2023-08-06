/**
 *
 * @param {Number} startNumber
 * @param {Number} endNumber
 * @return {Number} startNumber와 endNumber 사이에 랜덤한 값을 반환해줍니다.
 */
const randomMaker = (startNumber, endNumber) => {
	return Math.floor(Math.random() * (endNumber - startNumber)) + startNumber
}

export default randomMaker
