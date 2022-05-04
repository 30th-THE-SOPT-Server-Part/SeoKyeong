console.log('Hello Server');

setTimeout((): void => {
    console.log('Hello Server 2');
}, 3000);

console.log('Hello Server 3');

const condition: boolean = true;

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject(new Error('에러 발생! condition false'))
    }
});

promise
    .then((resolveData): void => console.log(resolveData))
    .catch(err => console.log(err));

const restaurant = (callback: () => void, time: number) => {
    setTimeout(callback, time);
}

const order = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 주문]')
            resolve('음식 주문 시작');
        }, 1000);
    });
}

const cook = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log('[레스토랑 진행 상황 - 음식 조리]');
        restaurant(() => {
            resolve(`${progress} -> 음식 조리 중`);
        }, 2000);
    });
}

const serving = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log('[레스토랑 진행 상황 - 음식 서빙]');
        restaurant(() => {
            resolve(`${progress} -> 음식 서빙 중`);
        }, 3000);
    });
}

const eat = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log('[레스토랑 진행 상황 - 음식 먹기]');
        restaurant(() => {
            resolve(`${progress} -> 음식 먹는 중`);
        }, 4000);
    });
}

order()
    .then(progress => cook(progress))
    .then(progress => serving(progress))
    .then(progress => eat(progress))
    .then(progress => console.log(progress));

Promise.resolve(123)
    .then(res => {
        throw new Error('에러 발생!')
        return 456
    })
    .then(res => {
        console.log(res)
        return Promise.resolve(789)
    })
    .catch(err => {
        console.log(err.message)
    });

// 함수 표현식
const asyncFunction1 = async () => {

}

// 함수 선언식
async function asyncFunction2() {

}

let asyncFunc1 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc1 - ${msg}`);
        }, 1000);
    });
}

let asyncFunc2 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc2 - ${msg}`);
        }, 1500);
    });
}

const promiseMain1 = (): void => {
    asyncFunc1('hi').then((result: string) => {
        console.log(result);
        return asyncFunc2('hello');
    }).then((result: string) => {
        console.log(result);
    });
};

const asyncMain = async (): Promise<void> => {
    let result = await asyncFunc1('hi');
    console.log(result);
    result = await asyncFunc2('hello');
    console.log(result);
};