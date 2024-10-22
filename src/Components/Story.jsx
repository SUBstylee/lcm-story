import React from 'react';
import Button from './Button';
import storyGenerator from '../storyGenerator';

const Story = ({
	character,
	setCharacter,
	num,
	setNum,
	showStory,
	toggleShowStory,
}) => {
	const storyParts = storyGenerator(character, num);
	const handleClearStory = () => {
		setCharacter('');
		setNum(3);
		toggleShowStory(!showStory);
	};
	return (
		<div>
			<p>
				{`${character} stumbled upon a weathered, torn piece of a map hidden beneath an old tree. The faded parchment hinted at a large treasure, but the map seemed incomplete. ${character} realized there were ${num} more pieces to find before the full path would be revealed. ${character} headed to the first destination located on this piece of the map...`}
			</p>
			{storyParts.map((part, index) => (
				<p key={index}>{part}</p>
			))}
			<Button onClick={() => handleClearStory()}>clear story</Button>
		</div>
	);
};

export default Story;
