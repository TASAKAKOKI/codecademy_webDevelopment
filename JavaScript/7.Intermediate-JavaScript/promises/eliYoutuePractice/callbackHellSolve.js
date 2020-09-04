'use strict'
    //JavaScript is synchronous.
    //Execute the code block by order after hoisting
    //hoisting이란? ==> var, function declaration 등이 자동적으로 제일 위로 올라가는 것. 
    //hoisting이 된 이후부터, 코드가 나타난 순서대로 excute한다는 것이 synchronous하다고 한다.
    //즉, 정해진 순서에 맞게 진행되는 것.

    //asynchronous는 언제 실행 될지 알 수 없이 비 순차적으로 진행되는 것.
    // e.g) setTimeout(handlerFunction, delay)

console.log(1);
setTimeout(() => console.log(2), 3000);
console.log(3);
setTimeout(() => console.log(4), 2000);
// it will print 1 => 3 => 4 => and then 2 at the end.

    //synchronous callback
    // JS가 자동적으로 함수의 선언 & 변수를 가장 위로 올리고, 그 후의 코드들을 순서대로 실행하게 되므로, 결과는 
    // 1 => 3 => hello => 4 => 2가 된다.
    function printImmediately(print) {
        print();
    }
    printImmediately(() => console.log('hello'));

    //asynchronous callback
    function printWithDelay(print, timeout) {
        setTimeout(print, timeout);
    };
    printWithDelay(() => console.log('async callback'), 1000);

    //Callback Hell example
class UserStorage {

    loginUser(id, password) {
        return new Promise((res,rej) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    res(id);
                } else {
                    rej(new Error('not found!'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((res,rej) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    console.log(user);
                    res({name: 'ellie', role: 'admin'});
                } else {
                    rej(new Error('no access!'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id :');
const password = prompt('enter your password :');
// cool!!!!  the bunch of lines replaced by very simple and clean code!!! 
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(res => alert(`Hello  ${res.name}, you have a ${res.role}  role`))
.catch(console.log);