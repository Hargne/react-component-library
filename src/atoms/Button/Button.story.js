import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { getColorSchemeNames } from 'componentville-theme/colors';
import Button, { buttonSizes } from './Button';

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);

const allSchemes = getColorSchemeNames();

stories.add(
	'Button',
	withInfo('A default button')
	(() =>
		<Button
			fullWidth={boolean('Full Width', false)}
			disabled={boolean('Disabled', false)}
			onClick={action('clicked')}
			size={select('Size', buttonSizes, buttonSizes[0])}
			scheme={select('Scheme', allSchemes, allSchemes[0])}
		>
			{text('Button Text', 'Button Text')}
		</Button>
	)
);
