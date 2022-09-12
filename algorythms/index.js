function returnEvenOdd(number) {
  if (Number(number)) {
    return number % 2 ? "Odd" : "Even";
  }
  return NaN;
}

function stringRemake(string) {
  const stringArr = string
    .split("")
    .map((singleLetter, index) => {
      result = singleLetter.repeat(index);
      return result;
    })
    .join("-");

  return stringArr;
}

myarray = [1, 2, 3, 4, "a", "b", 8];

function myFilter(array, myType) {
  resultArr = [];
  array.reduce((previousValue, current) => {
    if (typeof current === myType) {
      previousValue.push(current);
      return previousValue;
    } else {
      return previousValue;
    }
  }, resultArr);

  return resultArr;
}

const myArr = ["10", "5", "20", "0", "5.14"];

function stringToNum(arr) {
  return arr.map((singleElem) => {
    return Number(singleElem);
  });
}

const objArr = [
  { name: "Jon", age: 15 },
  { name: "Marry", age: 12 },
];


// DESTYTOJO PLUCK
// function pluck(objArr, key) {
//     return objArr.reduce((result, obj) => {
//         return obj[key] ? result.concat(obj[key]) : result;
//     }, []);
// }

function pluck(objArr, key) {
  let resultArr = [];
  objArr.forEach((element) => {
    Object.entries(element).filter((singleArr) => {
      if (singleArr[0] === key) {
        resultArr.push(singleArr[1]);
        return;
      }
    });
  });
  return resultArr;
}

randomArr = ["Dog", "Toulouse", "Cat", "Piligrim"];

function removeGeese(array) {
  geese = ["African", "Roman Tufted", "Toulouse", "Piligrim", "Steinbacher"];

  return array.reduce((previous, current) => {
    if (
      !geese.some((singleGeese) => {
        return singleGeese === current;
      })
    ) {
      return previous.concat(current);
    } else {
      return previous;
    }
  }, []);
}

console.log(removeGeese(randomArr));
