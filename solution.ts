// Problem 1:

const filterEvenNumbers = (numbers: number[]): number[]=> {
    return numbers.filter(num => num % 2 == 0)
}

const arr = [1,2,3,4,5,6,7,8,9]



// Problem 2:

const reversString = (str: string): string => {
    let reversed = '';
    for (let i = str.length -1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed
}



// problem 3:

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): "String" | "Number" => {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
};


// problem 4: 

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};


// Problem 5: 

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

interface ReadableBook extends Book {
    isRead: boolean;
}

const toggleReadStatus = (book: Book): ReadableBook => ({
    ...book,
    isRead: true
});



// Problem 6: 

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails = (): string => {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


// problem 7: 

const getIntersection = (arr1: number[], arr2: number[]): number[] => 
    arr1.filter(item => arr2.includes(item));
