import faceDetect from "./Images/faceDetect.png"
import jsLibsLab from "./Images/jslibslab.gif"
import memMem from "./Images/memmem.jpg"
import kungFuRun from "./Images/kungFuRun.gif"
import twitterMining from "./Images/twitterMining.png"
import powerRanking from "./Images/powerRanking.png"


export const cardContents = [
	{
		header: powerRanking,
		title: "Power Ranking Poll ",
		details: "A React web application for sport league enthusiasts to create power ranking polls.",
	},
	{
		header: jsLibsLab,
		title: "JS Libs Lab",
		details: "A unique web application for web development students and programmers to explore JavaScript libraries.",
		website: "https://js-libs-lab.web.app/"
	},
	{
		header: kungFuRun,
		title: "Kung Fu Run",
		details: "A Unity3D driven parkour game featuring Asian and Chinoiserie arts.",
	},
	{
		header: twitterMining,
		title: "Similar Twitter User Mining",
		details: "Generated graphs of Twitter users with similarities in interests and opinions.",
	},
	{
		header: faceDetect,
		title: "SVM Human Face Detector",
		details: "A facial recognition model that draws rectangles on all human faces in an image.",
	},
	{
		header: memMem,
		title: "Memory-Memory Processor",
		details: "A memory-memory processor that can run GCD algorithm and Euclid's algorithm",
		// source: "https://github.com/anjalig21/Unbeatable-Tic-Tac-Toe",
	},
	{
		header: memMem,
		title: "Memory-Memory Processor",
		details: "A memory-memory processor that can run GCD algorithm and Euclid's algorithm",
	}
];

// init for populating split arrays
const cardNumber = 3;
const cardNumberSmall = 2;
let firstSectionInit = [];
let secondSectionInit = [];
let thirdSectionInit = [];
let firstSmallSectionInit = [];
let secondSmallSectionInit = [];

// populate arrays for each section
for (let i = 0; i < cardContents.length; i++) {
	firstSectionInit.push(cardContents[i * cardNumber]);
	secondSectionInit.push(cardContents[i * cardNumber + 1]);
	thirdSectionInit.push(cardContents[i * cardNumber + 2]);

	if (i * cardNumber + cardNumber >= cardContents.length) {
		break;
	}
}
for (let i = 0; i < cardContents.length; i++) {
	firstSmallSectionInit.push(cardContents[i * cardNumberSmall]);
	secondSmallSectionInit.push(cardContents[i * cardNumberSmall + 1]);

	if (i * cardNumberSmall + cardNumberSmall >= cardContents.length) {
		break;
	}
}

// export arrays for each section
export const firstSectionCards = firstSectionInit;
export const secondSectionCards = secondSectionInit;
export const thirdSectionCards = thirdSectionInit;
export const firstSmallSectionCards = firstSmallSectionInit;
export const secondSmallSectionCards = secondSmallSectionInit;