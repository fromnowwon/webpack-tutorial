import './style.css'
import List from './List';

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

document.getElementById("user-list").appendChild(
	List({ userList: users })
)