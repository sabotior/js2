function Container(name) {//с большой буквы - хитрость программистов для функций - конструкторов
this.id = name;
this.method = function() {}//для каждого экземпляра объекта будет своя копия

//var property = 'somfing';//доступна только внутри контейнера, чего нельзя сделать в прототипе
//function foo() {}

//var firstName = 'Vasya';
//var lastName = 'Ivanov';
//this.getFullName = function() {
 //   return lastName + ' ' + firstName;
//}


}

Container.prototype.method2 = function() {}//один общий метод для всех экземпляров объектов
//можно ставить после создания объектов, обновятся все объекты
//при вызове сначала вызывается метод this, если не найдет, ищет в прототипе




var c1 = new Container('Vasya');
var c2 = new Container('Petya');
//c1.id
c1.method();
c1.method2();

var human = {
    firstName: 'Luke',
    lastName: 'Skywalker'
}

human.age = 27;

//P.S. в JS сначала создаются переменные, потом при втором проходе заполняются значения
//у всех функций создаются прототипы