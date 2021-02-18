// Это только заготовка, она не включена пока что в основной код. В будущем доделаю.

// Массив из которого получаем данные о контактах для вывода на карточку
var contacts = {
	[
		{
			name: "Василий Пупкин",
			email: "Example@gmail.com",
			address: "м.Киев, ул.Владимирская, 24",
			phone: "+38(068)123-45-67",
			web: "mysytefirst.com",
			avatar: "images/avatar-1.jpg"
		},
		{
			name: "Василий Пупкин",
			email: "Example@gmail.com",
			address: "м.Киев, ул.Владимирская, 24",
			phone: "+38(068)123-45-67",
			web: "mysytefirst.com",
			avatar: "images/avatar-2.jpg"
		},
	]
}

// Функция создания всех блоков
function start() {
	var createContent = document.createElement("div");
	createContent.className = 'content';

	var card_info = document.createElement("div");
	card_info.className = 'card-info';

	var star = document.createElement("div");
	star.className = 'content';

}