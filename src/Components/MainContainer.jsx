import { useState } from 'react';
import Header from './Header';
import Description from './Description';
import StoryForm from './StoryForm';
import Story from './Story';

const MainContainer = () => {
	const [character, setCharacter] = useState('');
	const [num, setNum] = useState(3);
	const [showStory, setShowStory] = useState(false);
	return (
		<div className='main-container'>
			<Header>Recursive Story</Header>
			{!showStory && (
				<>
					<Description />
					<StoryForm
						setCharacter={setCharacter}
						num={num}
						setNum={setNum}
						showStory={showStory}
						toggleShowStory={setShowStory}
					/>
				</>
			)}
			{showStory && (
				<Story
					character={character}
					setCharacter={setCharacter}
					setNum={setNum}
					num={num}
					showStory={showStory}
					toggleShowStory={setShowStory}
				/>
			)}
		</div>
	);
};

export default MainContainer;
