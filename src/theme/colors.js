import Color from 'color';

export const ColourScheme = {
	primary: '#E80023',
	secondary: '#0074C3',
	success: '#30BE3C',
	danger: '#dc3545',
	warning: '#F9DC06',
	info: '#0097FD',
	// Black - White Colors
	black: '#111',
	white: '#fff'
}

export const getColorSchemeNames = () => Object.keys(ColourScheme);
export const getColorSchemeColor = (key) => ColourScheme[key];

const GenerateFullColorScheme = (scheme) => {
	const fullScheme = {};
	for (const item in scheme) {
		const color = Color(scheme[item]);
		fullScheme[item] = new SchemeColor(scheme[item]);
	}
	return fullScheme;
};

class SchemeColor {
	constructor(baseColorHex) {
		const baseColor = Color(baseColorHex);
		this.generateDefaultVariants(baseColor);
	}
	generateDefaultVariants(color) {
		this.baseColor = color;
		this.base = color.hex();
		this.darker = color.darken(0.3).hex();
		this.lighter = color.lighten(0.3).hex();
	}
	lighten(amount) {
		return this.baseColor.lighten(amount).hex();
	}
	darken(amount) {
		return this.baseColor.darken(amount).hex();
	}
	getTextColor(hex) {
		const theColor = hex ? Color(hex) : this.baseColor;
		return (theColor.isLight()) ? ColourScheme.black : ColourScheme.white;
	}
}

export default GenerateFullColorScheme(ColourScheme);
