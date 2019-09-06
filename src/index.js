import mole from 'mole'
import fs from 'fs'
import postcss from 'postcss'
import atImport from 'postcss-import'
import customSelectors from 'postcss-custom-selectors'
import extend from 'postcss-extend-rule'
import autoprefixer from 'autoprefixer'
import precss from 'precss'

import width from './parts/width'
import maxWidth from './parts/max-width'
import margin from './parts/margin'
import colorTheme from './parts/color-theme'
import padding from './parts/padding'
import fontStyle from './parts/font-style';
import flex from './parts/flex';
import fontSize from './parts/font-size';
import height from './parts/height';
import fontColor from './parts/font-color';
import zIndex from './parts/z-index';

// import parts from './models/parts';
mole.config('src/mole.config.js')
mole.theme('karamel.theme.jsonnet')
// mole.add(...width)
// mole.add(...parts)
mole.add(...margin)
mole.add(...padding)
mole.add(...width)
mole.add(...maxWidth)
mole.add(...colorTheme)
mole.add(...fontStyle)
mole.add(...fontSize)
mole.add(...flex)
mole.add(...height)
mole.add(...fontColor)
mole.add(...zIndex)

mole.build()

// Need an option to avoid build and just output string to pass straight to postcss

fs.readFile('dist/main.css', (err, css) => {
	postcss([atImport, customSelectors, extend])
		.process(css, { from: 'dist/main.css', to: 'dist/output.css' })
		.then(result => {
			fs.writeFile('dist/output.css', result.css, () => true)
			if (result.map) {
				fs.writeFile('dist/output.css.map', result.map, () => true)
			}
		})
})

// console.log(mole.debug)
