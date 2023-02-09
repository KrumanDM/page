
console.log( 'Привет, мир!' );


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
