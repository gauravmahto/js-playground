/**
 * Copyright 2018 - Author gauravm.git@gmail.com
 */

const { log } = console;

// #region Person class.

function Person(first, last, age, gender) {

  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;

}

Person.prototype.greeting = function () {

  log('Person - Hi! I\'m ' + this.name.first + '.');

};

// #endregion Person class.

// #region Teacher class.

function Teacher(first, last, age, gender, subject) {

  Person.call(this, first, last, age, gender);

  this.subject = subject;

}

Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false,
  writable: true
});

Person.prototype.greeting = function () {

  log('Teacher - Hi! I\'m ' + this.name.first + '.');

};

// #endregion Teacher class.

const teacher = new Teacher('anonymous');
teacher.greeting();
