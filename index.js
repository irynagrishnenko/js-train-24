console.log("Завдання: 1 ==============================");

function task1() {
  function getData(data, timeout = 2000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(data).length > 0) {
          resolve(data);
        } else {
          reject(new Error("Об'єкт пустий"));
        }
      }, timeout);
    });
  }

  getData({ name: "John", age: 30, city: "New York" }, 2000)
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      console.log("Завдання 1 завершено");
    });
}

task1();

console.log("Завдання: 2 ==============================");

function task2() {
  function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 2000);
    });
  }

  function promise2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Проміс 2 виконано");
      }, 5000);
    });
  }

  Promise.race([promise1(), promise2()])
    .then(
      (value) => console.log(value),
      (error) => console.log(error)
    )
    .finally(() => console.log("Завдання 2 завершено"));
}

task2();

console.log("Завдання: 3 ==============================");

function task3() {
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 1000);
    });
  }

  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Проміс 2 відхилено"));
      }, 2000);
    });
  }

  Promise.allSettled([promise1(), promise2()])
    .then((results) => results.forEach((result) => console.log(result.status)))
    .finally(() => {
      console.log("Завдання 3 завершено");
    });
}

task3();

console.log("Завдання: 4 ==============================");

function task4() {
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 1000);
    });
  }

  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 2 виконано");
      }, 1000);
    });
  }

  Promise.all([promise1(), promise2()])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Всі операції завершено");
    });
}

task4();

console.log("Завдання: 5 ==============================");

function task5() {
  let counter = 0;
  const intervalPromise = new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      counter++;
      console.log(`Значення лічильника: ${counter}`);

      if (counter === 5) {
        clearInterval(intervalId);
        resolve(counter);
      }
    }, 1000);
  });

  intervalPromise
    .then((value) => {
      console.log(`${value}`);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Завершення лічильника");
    });
}

task5();

console.log("Завдання: 6 ==============================");

function task6() {
  const promise = new Promise((resolve, reject) => {
    setImmediate(() => {
      Math.random() > 0.5 ? resolve("Більше ніж 0.5") : reject("Менше ніж 0.5");
    });
  });

  promise
    .then((value) => {
      console.log(`Проміс зарезолвився з значенням: ${value}`);
    })
    .catch((error) => {
      console.log(`Проміс відхилився з помилкою: ${error}`);
    })
    .finally(() => {
      console.log("Проміс завершено");
    });
}

task6();

console.log("Завдання: 7 ==============================");

function task7() {
  const intervalPromise = new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const seconds = date.getSeconds();
      console.log(`Поточні секунди: ${seconds}`);

      if (seconds % 10 === 0) {
        clearInterval(intervalId);
        resolve("Поточні секунди кратні 10!");
      } else if (seconds % 3 === 0) {
        clearInterval(intervalId);
        reject("Поточні секунди кратні 3!");
      }
    }, 1000);
  });

  intervalPromise
    .then((value) => {
      console.log(`Проміс зарезолвився з значенням: ${value}`);
    })
    .catch((error) => {
      console.error(`Проміс відхилився з помилкою: ${error}`);
    })
    .finally(() => {
      console.log("Проміс завершено");
    });
}

task7();

console.log("Завдання: 8 ==============================");

function task8() {
  function fetchFakeData() {
    const fakeData = { name: "John", age: 30 };
    return Promise.resolve(fakeData);
  }

  fetchFakeData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

task8();

console.log("Завдання: 9 ==============================");

function task9() {
  function fetchWithError() {
    const errorMessage = "Помилка при з'єднанні з сервером";
    return Promise.reject(new Error(errorMessage));
  }

  fetchWithError()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

task9();

console.log("Завдання: 10 ==============================");

function task10() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 500);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 200);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 300);
  });

  Promise.any([promise1, promise2, promise3])
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

task10();
