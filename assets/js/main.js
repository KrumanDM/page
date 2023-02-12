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
    

	let valid = true;
    
	//Проверка имени
	const nameField = document.getElementById( 'name' );
	if ( ! nameField.value || nameField.value.length < 3 ){
      errorContainer.innerHTML += '<p style="color:red"> Поле имени ни разу не ок</p>';
	valid = false;
	}

	//Проверка email
	const emailField = document.getElementById( 'email' ),
          re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	if ( ! emailField.value || ! re.test(String(emailField.value).toLowerCase()) ){
      errorContainer.innerHTML += '<p style="color:red"> Ваш email не заполнен или не корректен</p>';
	valid = false;
	}

	//Проверка сообщений
	const msgField = document.getElementById( 'message' );
	if ( ! msgField.value || msgField.value.length < 10 ){
      errorContainer.innerHTML += '<p style="color:red"> Поле сообщения не заполнено</p>';
	valid = false;
	}

	// Если была хотя бы одна ошибка
	if ( false === valid ) {
	event.preventDefault();
	}
	return valid;
}


const myForm = document.getElementById( 'contactform' );




myForm.addEventListener( 'submit', validate);