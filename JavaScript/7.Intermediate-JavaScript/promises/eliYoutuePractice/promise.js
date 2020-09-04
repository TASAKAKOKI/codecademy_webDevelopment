'use strict';

// promise is a JavaScript object for asynchronous operation.
// 비동기적인 행위를 처리 할 때, callback 함수 대신 유용하게 쓰이는 오브젝
// state(현 상태)가 prepend인지, resolve(fulfilled)인지, reject인지
// consumer와 producer의 차이 
// producer(promise오브젝) vs consumer

//1. Producer
//  promise는 class이므로, new를 이용하여 생성
// *** when new promise is created, the executor runs automatically.
const promise = new Promise((resolve,reject) => {
    //use promise when doing some heavy process.(networking, read heavy fil etc..)
    console.log('I\'m doing something now...');
    // promise가 이렇게 생성되는 순간, 이미 동작은 executing 되고 있다.
    // 만드는 순간 promise안의 executor가 실행되므로, 이점 유의 할 것.
    setTimeout(() => {
        // resolve('Hey, you\'ve done!');
        reject(new Error('WAHHHH SOMETHING WRONG!!'));
    }, 2000)
});

//2. Consumers: then, catch, finally
// promise를 사용(이용)하는 단계
promise //
    .then((value) => {
    console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('everything done no matter resolved or rejected.');
    })

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    console.log('from now on start!');
    setTimeout(() => resolve(1), 1000);
    console.log('it took 1 second till here');
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve,reject) => {
        console.log('New promise is going on from now on.');
        setTimeout(() => resolve(num - 1), 1000);
        console.log('till here another 1 second passed');
    });
});

// 4. Error Handling
const getHen = () => 
    new Promise((res,rej) => {
        setTimeout(() => res('Chicken'), 1000);
    });
const getEgg = hen => 
    new Promise((res,rej) => {
        setTimeout(() => res(`${hen} => egg`), 1000);
    });
const cook = egg => 
    new Promise((res,rej) => {
        setTimeout(() => res(`${egg} => meal`), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));