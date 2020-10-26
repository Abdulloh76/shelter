import { generatePets, generateCard, sort6recursively } from './petsContent.js';

const contentWidth = window.innerWidth;
const cardsNumber = contentWidth >= 1280 ? 8 : contentWidth >= 768 ? 6 : 3;

// DOM Elements
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navigation');
const logo = document.querySelector('.header__logo');
// NavBar
const showNavBar = () => {
	burger.classList.toggle('burger-active');
	navBar.classList.toggle('navigation-active');
	logo.classList.toggle('logo-move');

	document.addEventListener('click', (e) => {
		if (e.target.closest('.burger') === burger) return;
		else if (navBar.classList.contains('navigation-active') && !e.target.classList.contains('navigation'))
			showNavBar();
	});
	console.log(fullPetsList);
};

burger.addEventListener('click', showNavBar);

// Pets Generation

let pets = []; // 8
let fullPetsList = []; // 48

fetch('../pets.json').then((res) => res.json()).then((list) => {
	pets = list;

	fullPetsList = (() => {
		let tempArr = [];
		for (let i = 0; i < 6; i++) {
			const newPets = pets;
			for (let j = pets.length; j > 0; j--) {
				let randInd = Math.floor(Math.random() * j);
				const randElem = newPets.splice(randInd, 1)[0];
				newPets.push(randElem);
			}
			tempArr = [ ...tempArr, ...newPets ];
		}
		return tempArr;
	})();

	fullPetsList = sort6recursively(fullPetsList);
	generatePets(fullPetsList, cardsNumber, pets);
});
