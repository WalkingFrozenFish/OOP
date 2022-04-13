var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Процедурный подход в программировании
var width = 5;
var height = 10;
function calcRectArea(width, height) {
    return width * height;
}
calcRectArea(width, height);
// ООП
// Класс - это набор характеристик, которые описывают некоторую сущность
// К примеру класс "Человек", этот класс обладает такими характеристиками как Имя, Фамилия, Возраст, Вес, Рост. Они характеризуют некоторую сущность, то есть в данном сучае человека
// Объект - экземлпяр класса, обладает уже определенными значениями в характеристиках
// К примеру объект "Василий", это экземпляр класса "Человек". У данного экземпляра есть значения в характеристиках, то есть Имя - Вася, Фамилия - Пупкин, Возраст - 27, Вес - 70, Рост - 80
// Свойства - это все те характеристики Имя, Фамилия, Возраст, Вес, Рост
// Методы - это все те действия, которые может делать объект, к примеру Рисовать, Ходить, Кодить, Говорить
// Класс Прямоугольник
var Rectangle = /** @class */ (function () {
    // У каждого класса есть конструктор, это специальный метод, некоторый блок инструктций, который будет вызван при создании объекта. Он может принимать аргументы. Обычно в конструкторе свойствам объекта присваиваются какие то значения. В данном случае мы принимаем аргументами высоту и ширину, и сохраняем их
    function Rectangle(w, h) {
        this.width = w;
        this.height = h;
    }
    // Так же есть метод для вычисления площади прямоугольника
    // В классах может быть сколько угодно методов
    Rectangle.prototype.calcArea = function () {
        // Под this, подразумевается объект у которого будет вызван этот метод
        return this.width * this.height;
    };
    Rectangle.prototype.calcPerimetr = function () {
        return (this.height + this.width) * 2;
    };
    return Rectangle;
}());
// С помощью оператора new, мы можем создать объект, то есть отдельный экземпляр класса.
// Передаем аргументами высоту и ширину
var rect = new Rectangle(5, 10);
// У созданного объекта, мы можем вызвать соответствующий метод, который вернет площадь объекта, у которого мы вызвали этот метод
rect.calcArea();
// Так же можно создать сколько угодно объектов из любого класса
// В данном примере, у каждого прямоугольника своя высота и ширина
var rect1 = new Rectangle(15, 20);
console.log("Area - rect1", rect1.calcArea());
console.log("Perimetr - rect1", rect1.calcPerimetr());
var rect2 = new Rectangle(25, 12);
console.log("Area - rect2", rect2.calcArea());
console.log("Perimetr - rect2", rect2.calcPerimetr());
var rect3 = new Rectangle(10, 42);
console.log("Area - rect3", rect3.calcArea());
console.log("Perimetr - rect3", rect3.calcPerimetr());
// ООП базируется на трех основных концепциях "Инкапсуляция", "Наследование", "Полиморфизм"
// Инкапсуляция - Класс, это своего рода капсула, которая хранит в себе свойства и методы для работы с этими самыми свойствами. То есть класс объединяет это все вместе.
// Сокрытие - К примеру возьмем класс "Человек", у этого класса есть такие свойства как "Имя", "Фамилия", "Возраст" и методы "Писать код", "Говорить", "Ходить", "Рисовать". Эти свойства и методы публичные, и их использование в любом месте кода, не нарушит логику программы.
// Помимо публичных свойств и методов есть закрытая часть, приватная. Это та часть с которой мы не можем работать и как то повлиять извне. К примеру класс "Человек", у человека есть приватные методы "Перекачивание крови", "Переваривание пищи", "Обработка информации", это скрытая часть, которая находится внутри человека, та часть на которую мы не можем повлиять как то извне.
// Существуют модификаторы доступа public и private, они позволяют делать свойства и методы публичными или приватными. Свойства и методы с модификатором private, можно использовать только внутри класса, вызвать их извне нельзя
// К примеру возьмем подключение к базе данных. В классе присутствую поля url и port. Для того что бы никто не смог поменять url, у этого свойства устанавливается модификатор доступа private. Единственный способ установки значения, это конструктор класса, то есть устанавливаем значения при создании экземпляра класса, и забываем
var Rectangle1 = /** @class */ (function () {
    function Rectangle1(w, h) {
        this._width = w;
        this._height = h;
    }
    Object.defineProperty(Rectangle1.prototype, "width", {
        // Для того что бы получать доступ к этим свойствам (получать и изменять), используются геттеры и сеттеры
        // В данном случае, при вызове геттера, мы просто вернем ширину объекта
        get: function () {
            // Внутри класса и методов, мы можем обращаться к приватным свойствам данного класса
            // this._height;
            return this._width;
        },
        // В случае с сеттером, мы можем присвоить новое значение, либо сделать дополнительные действия
        // Если явно не указывать модификатор доступа, он будет по умолчанию public
        set: function (value) {
            if (value <= 0) {
                this._width = 1;
            }
            else {
                this._width = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle1;
}());
var rect4 = new Rectangle1(5, 10);
// В данном случае мы не сможем обратиться к высоте, так как свойство приватное, и для него не созданы геттеры и сеттеры
// rect4.height();
console.log("Геттер", rect4.width);
// Пример
// Создание класса User
var User = /** @class */ (function () {
    // Имя и пароль мы получаем при создании эуземпляра класса
    function User(username, password) {
        this.username = username;
        this.password = password;
        // this._id = generateRandomId();
    }
    Object.defineProperty(User.prototype, "username", {
        // Для получения и изменения значений, создаем геттеры и сеттеры
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
// Создание экземпляра класса
var user = new User("username", "password");
// Ошибка, так как поле id доступно только для чтения
// user.id = 10;
// Так как мы создали сеттеры и геттеры, мы можем получить доступ к приватным свойствам
user.username = "user";
user.password = "123";
// Пример
// Создание класса
var Database = /** @class */ (function () {
    // Значения свойств мы присваиваем внутри конструктора
    function Database(url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }
    // Публичный метод, с помощью которого мы добавляем таблицы в массив
    Database.prototype.createNewTable = function (table) {
        this._tables.push(table);
    };
    // Публичный метод для удаления таблиц из массива
    Database.prototype.clearTables = function () {
        this._tables = [];
    };
    Object.defineProperty(Database.prototype, "url", {
        // Геттеры
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "tables", {
        get: function () {
            return this._tables;
        },
        enumerable: false,
        configurable: true
    });
    return Database;
}());
// Создание экземпляра класса, в который мы передаем данные
var db = new Database(1, 2, 3, 4);
// Ошибка, приватное свойство
// db.tables = [];
// С помощью публичных методов, мы добавляем данные в массив
db.createNewTable({ "user": "1" });
db.createNewTable({ "data": "2" });
// Так же удаляем данные из массива
db.clearTables();
// Данные примеры показывают работу инкапсуляции и сокрытия. Они позволяют объявлять приватные свойства и методы, которые не доступны извне. Получение доступа к приватным свойствам с помощью геттеров и сеттеров.
// Наследование - основная концепция, где классы могут наследовать определенные свойства и методы других классов.
// К примеру у нас есть класс "Человек", у этого класса есть свойства, такие как Имя, Фамилия, Возраст. Эти свойства присущи классу "Человек". Другие данные этому классу не требуются
// Далее, у нас есть класс "Работник", у этого класса есть собственные свойства, такие как ИНН, СНИЛС, Серия, Номер паспорта. Эти свойства присущи классу "Работник". Так же класс "Работник" наследует свойства класса "Человек", другими словами, класс "Работник" расширяет класс "Человек".
// Еще у нас есть класс "Разработчик", у него есть собственные свойства, такие как Язык программирования, уровень. И он так же наследует свойства "Человек" и "Работник".
// Создаем класс "Person"
var Person = /** @class */ (function () {
    // Объявляем конструктор, куда передаем свойства
    function Person(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        // Создаем геттер для получения имени и фамилии
        get: function () {
            return "\u0424\u0430\u043C\u0438\u043B\u0438\u044F - ".concat(this._lastName, " \u0418\u043C\u044F - ").concat(this._firstName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                this._age = 0;
            }
            else {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
// Создаем класс "Employee", который будет наследовать свойства и методы родительского класса
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // При наследовании, по умолчанию будет наследован родительский конструктор
    function Employee(firstName, lastName, age, inn, number, snils) {
        var _this = 
        // Сперва будет вызван родительский конструктор, и только потом выполнять в данном классе какие то действия
        _super.call(this, firstName, lastName, age) || this;
        _this._inn = inn;
        _this._number = number;
        _this._snils = snils;
        return _this;
    }
    return Employee;
}(Person));
var employee1 = new Employee("Name", "Last name", 20, 123, 432, 12341234);
console.log(employee1);
console.log(employee1.fullName);
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, age, inn, number, snils, level, language) {
        var _this = _super.call(this, firstName, lastName, age, inn, number, snils) || this;
        _this._level = level;
        _this._language = language;
        return _this;
    }
    return Developer;
}(Employee));
var developer1 = new Developer("DevName", "DevLastName", 23, 12341234, 4321, 123512351251235, "Senior", "JS");
console.log(developer1);
console.log(developer1.fullName);
