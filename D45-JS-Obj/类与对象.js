// 基于类的对象创建
var Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.PrintInfo = function () {
        console.log('name:' + this.name + '   age:' + this.age);
    };
};

var student1 = new Person('Benjamin', 20);
var student2 = new Person('Stella', 20);
student1.PrintInfo();
student2.PrintInfo();

// 对象方法的添加
Person.prototype.age_add_x = function (x) {
    this.age += x;
};
student1.age_add_x(10);
student1.PrintInfo();


// ----------------------------------------------------------------------------------------------

// 直接对象创建
var student3 = new Object();
student3.name = '皮卡丘';
student3.age = 100;
student3.PrintInfo = function () {
    console.log('age:' + this.age + '   name:' + this.name);
};


student3.PrintInfo();