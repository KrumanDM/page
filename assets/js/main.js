// получаем элемент из дерева DOM, и присваиваем его в константу
const menuBurger = document.querySelector( '.menu-open' );

// при клике на бургер
menuBurger.addEventListener( 'click', ( event ) => {

	// добавляем класс на боди
	document.body.classList.add( 'is-menu-visible' );

} );


const menuClose = document.querySelector( '.close' );

// при клике на крестик
menuClose.addEventListener( 'click', ( event ) => {

	// закрываем меню, удаляем класс из боди
	document.body.classList.remove( 'is-menu-visible' );

} );



// Валидация формы

function validate (event){

	const errorContainer = document.getElementById( 'errors' );
    // Очищаем все ошибки перед новой валидацией формы
	errorContainer.innerHTML = '';
    
    const contactFormData = {
		name: '',
		email: ''
	}

	let valid = true;
    
	//Проверка имени
	const nameField = document.getElementById( 'name' );
	if ( ! nameField.value || nameField.value.length < 3 ){
      errorContainer.innerHTML += '<p style="color:red"> Поле имени ни разу не ок</p>';
	valid = false;
	} else {
		contactFormData.name = nameField.value;
		
	}

	//Проверка email
	const emailField = document.getElementById( 'email' ),
          re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	if ( ! emailField.value || ! re.test(String(emailField.value).toLowerCase()) ){
      errorContainer.innerHTML += '<p style="color:red"> Ваш email не заполнен или не корректен</p>';
	valid = false;
	} else {
		contactFormData.email = emailField.value;
	}

	//Проверка сообщений
	const msgField = document.getElementById( 'message' );
	if ( ! msgField.value || msgField.value.length < 10 ){
      errorContainer.innerHTML += '<p style="color:red"> Поле сообщения не заполнено</p>';
	valid = false;
	}


	//Сохраняем в локал сторадж
    localStorage.setItem('contactformdata', JSON.stringify( contactFormData ));

	// Если была хотя бы одна ошибка
	if ( false === valid ) {
	event.preventDefault();
	}
	return valid;
}

const myForm = document.getElementById( 'contactform' );



myForm.addEventListener( 'submit', validate);


// Выводим данные в форму
const contactFormData = JSON.parse( localStorage.getItem('contctformdata'));
      nameField = document.getElementById ('name'),
	  emailField = document.getElementById ('email');

nameField.value = contactFormData.name;
emailField.value = contactFormData.email;
// const nameField = document.getElementById( 'name' );
// const userName = localStorage.getItem("name");
// nameField.value = userName;


// const emailField = document.getElementById( 'email' );
// const userEmail = localStorage.getItem("email");
// emailField.value = userEmail;

