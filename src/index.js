// import { hello, add } from './util';
import './style.css'
import logo from './images/logo-1.png';
import List from './List';

// const text = hello('안녕하세요')
// const num = add(1, 2);
// const img = `<img src="${logo}" alt="logo">`

const users = [
	{
		id: 1,
		name: "예리",
	},
	{
		id: 2,
		name: "슬기",
	},
	{
		id: 3,
		name: "웬디",
	},
	{
		id: 4,
		name: "조이",
	},
	{
		id: 5,
		name: "아이린"
	},
]

document.getElementById("root").appendChild(
	List({ userList: users })
)