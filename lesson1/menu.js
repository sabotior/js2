function Container(id, className, tagName) { // параметры конструктора
    //валидация
    if (['div', 'ul', 'li', 'a'].includes(tagName)) { //includes проверяет вхождение в массив
        //Ошибка
    }

    //публичные свойства:
    this.id = id;
    this.class = className;
    this.tagName = tagName;
}

//отрисовка - создание блока
Container.prototype.render = function () {
    var wrapper = document.createElement(this.tagName); //создали тег, поместили в переменную
    wrapper.id = this.id; //присвоили тегу id
    wrapper.className = this.class; //присвоили тегу class

    return wrapper; //возвращаем объект - тег
}

//наследование в js делается в несколько этапов
//напишем класс Menu
function Menu(id, className, items) {
    //Наследуем класс Container
    Container.call(this, id, className, 'ul'); //вызов функции Container через call, чтобы указать this в контексе Menu, а не Container
    //call скопирует указанные свойства класса Conteiner в класс Menu
    //такой специфический способ наследования
    //другой способ Container.apply(this, [id, class, 'ul']);
    this.items = items;
}

Menu.prototype = Object.create(Container.prototype); //наследуем - копируем прототип//нужна, если есть чтото в прототипе
//Object.create вместо того чтобы копировать ссылку, создает копию
//Menu.prototype = Object.assign({}, Container.prototype, Class1.prototype);
//если нужно сразу несколько, объединяя, одинаковые методы перезатрутся последним

//Изменяем render.prototype для Menu
Menu.prototype.render = function () {
    var ul = document.createElement('ul'); //создали тег, поместили в переменную
    this.items.forEach(function (item) {
       // if (item instanceof Menu) { //проверка, что item экземпляр класса Menu
        if (item instanceof Container) {//проверка, что item экземпляр класса Container
            ul.appendChild(item.render()); // нарисовали тег внутри ul
        }
    });
    
    return ul;
}

function MenuItem(className, title, href) {
    Container.call(this, null, className, 'li');

    this.title = title;
    this.href = href;
}

MenuItem.prototype = Object.create(Container.prototype);
//Изменяем render.prototype для MenuItem
MenuItem.prototype.render = function () {
    var li = document.createElement('li'); //создали тег, поместили в переменную
    var link = document.createElement('a'); //создали тег, поместили в переменную

    link.href = this.href; //присвоили тегу <a> href
    link.textContent = this.title; //добавили текст в тег <a></a>

    li.appendChild(link); // нарисовали тег а внутри li

    return li;
}