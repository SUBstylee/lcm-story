const storyGenerator = (character, count) => {
	if (count === 0) {
		return [
			`${character} has found the complete treasure map! ${character} follows it and after some digging, unearths a huge chest of${
				Math.floor(Math.random() * 2)
					? `... nothing! Looks like someone got to it first. Better luck next time, ${character}.`
					: ` precious stones and valuable artifacts! ${character} goes on to live happily ever after!`
			}`,
		];
	} else {
		let currTask;
		switch (count % 4) {
			case 0:
				currTask = `${character} follows the map to an abandoned mine shaft. After some investigation, a piece of the map is found! Then...`;
				break;
			case 1:
				currTask = `${character} follows the map to a creepy forest. Up in a tree is a box, and another piece of the map is found in it! Then...`;
				break;
			case 2:
				currTask = `${character} follows the map to an old weather worn shack. In an old shoe is another piece of the map! Then...`;
				break;
			case 3:
				currTask = `${character} follows the map to a burnt down waterpark. Under some debris is another piece of the map! Then...`;
				break;
			default:
				return [
					`Something went wrong! ${character} will have to complete their adventure another day...`,
				];
		}
		return [currTask, ...storyGenerator(character, count - 1)];
	}
};

export default storyGenerator;
