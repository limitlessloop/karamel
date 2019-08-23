export default ['template', 'margin', ({ theme }) => {
	let name = 'margin'
	let abbr = theme.property.margin.abbr

	return `\
.${abbr} {
	${name}: var(--${name}, unset);
}
.${abbr} > * {
	--${name}: unset;
}`
}]
