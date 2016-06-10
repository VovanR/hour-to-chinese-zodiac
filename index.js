/* eslint-disable no-nested-ternary */

/**
 * @param {Number|String} hour
 * @return {String} chinese zodiac name
 */
function hourToChineseZodiac(hour) {
	if (!hour && hour !== 0 || hour > 24) {
		return '';
	}

	return hour > 22 ? 'rat' :
		hour > 20 ? 'pig' :
		hour > 18 ? 'dog' :
		hour > 16 ? 'rooster' :
		hour > 14 ? 'monkey' :
		hour > 12 ? 'goat' :
		hour > 10 ? 'horse' :
		hour > 8 ? 'snake' :
		hour > 6 ? 'dragon' :
		hour > 4 ? 'rabbit' :
		hour > 2 ? 'tiger' :
		hour > 0 ? 'ox' :
		'rat';
}

module.exports = hourToChineseZodiac;
