import { useState } from 'react';
import Button from './Button';
import Select from './Select';
import Input from './Input';

const numOptions = [3, 4, 5, 6, 7, 8, 9, 10];

const StoryForm = ({ setCharacter, setNum, showStory, toggleShowStory }) => {
	const [heroName, setHeroName] = useState('');

	const handleInputChange = (e) => {
		setHeroName(e.target.value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (heroName === '') {
			return alert('You must name your hero!');
		}
		setCharacter(heroName);
		toggleShowStory(!showStory);
	};

	return (
		<div>
			<form>
				<Select
					selectId='numSelect'
					label='How many events should take place in the story? '
					options={numOptions}
					setNum={setNum}
				/>
				<Input
					inputId='nameInput'
					label="What is the hero's name? "
					value={heroName}
					onChange={handleInputChange}
				/>
				<Button onClick={handleClick}>generate story</Button>
			</form>
		</div>
	);
};

export default StoryForm;
