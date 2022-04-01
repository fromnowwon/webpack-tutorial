import photo from './images/@temp.jpg'
import styles from './User.css';

export default function User({ name }) {
	const li = document.createElement("li");
	li.classList.add('user');
	li.addEventListener('click', () => {
		alert(name);
	})

	li.innerHTML = `
		<span class="img"><img src="${photo}" alt="${name}" /></span>
		<span class="name">${name}</span>
	`

	return li;
}