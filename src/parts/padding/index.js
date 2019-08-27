export default ['template', 'padding', ({ theme }) => {
	let name = 'padding'
	let abbr = theme.property.padding.abbr

	let o = theme.scale.spacing
	let string = ''
	for (let i = 0; i < o.length; i++) {
		let modifier = o[i]
		string += `.${abbr}-${i + 1} {\n`
		string += `	${name}: ${modifier}\n`
		string += `}\n`
	}

	for (let side in theme.property.padding) {
		if (side !== 'abbr') {
			let sideabbr = theme.property.padding[side].abbr

			for (let i = 0; i < o.length; i++) {
				let modifier = o[i]
				string += `.${abbr}${sideabbr}-${i} {\n`
				string += `	${name}-${side}: ${modifier}\n`
				string += `}\n`
			}
		}
	}

	string += `\
.${abbr} {
	${name}-top: var(--pt, unset);
	${name}-right: var(--pr, unset);
	${name}-bottom: var(--pb, unset);
	${name}-left: var(--pl, unset);
}
.${abbr} > * {
	--pt: unset;
	--pr: unset;
	--pb: unset;
	--pl: unset;
}`

	return string
}]
