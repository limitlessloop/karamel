import mole from 'mole'
import fs from 'fs'
import postcss from 'postcss'
import atImport from 'postcss-import'
import customSelectors from 'postcss-custom-selectors'
import extend from 'postcss-extend-rule'
import matches from 'postcss-selector-matches'
import autoprefixer from 'autoprefixer'
import precss from 'precss'

import width from './parts/width'
import maxWidth from './parts/max-width'
import margin from './parts/margin'
import border from './parts/border'
import colorTheme from './parts/color-theme'
import padding from './parts/padding'
import fontStyle from './parts/font-style';
import fontFamily from './parts/font-family';
import flex from './parts/flex';
import fontSize from './parts/font-size';
import height from './parts/height';
import fontColor from './parts/font-color';
import zIndex from './parts/z-index';
import borderColor from './parts/border-color'
import color from './parts/color'

// import parts from './models/parts';
mole.config('src/mole.config.js')
mole.theme('karamel.theme.jsonnet')
// mole.add(...width)
// mole.add(...parts)
mole.add(...margin)
mole.add(...border)
mole.add(...color)
mole.add(...borderColor)
mole.add(...padding)
mole.add(...width)
mole.add(...maxWidth)
mole.add(...colorTheme)
mole.add(...fontStyle)
mole.add(...fontFamily)
mole.add(...fontSize)
mole.add(...flex)
mole.add(...height)
mole.add(...fontColor)
mole.add(...zIndex)

mole.build()

// Need an option to avoid build and just output string to pass straight to postcss

export function buildPostCSS(input, output) {
	fs.readFile(input, (err, css) => {
		postcss([atImport, customSelectors, extend, matches])
			.process(css, { from: input, to: output })
			.then(result => {
				fs.writeFile(output, result.css, () => true)
				if (result.map) {
					fs.writeFile(output + '.map', result.map, () => true)
				}
			})
	})
}

buildPostCSS('./src/styles/utilities.css', './dist/karamel/utilities.css')
buildPostCSS('./src/styles/normalize.css', './dist/karamel/normalize.css')
buildPostCSS('./src/styles/main.css', './dist/karamel/index.css')

buildPostCSS('./src/styles/utilities.css', './utilities.css')
buildPostCSS('./src/styles/normalize.css', './normalize.css')

// console.log(mole.debug)
