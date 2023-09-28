const Questions=[
    {
        difficulty:'easy',
        question:'What is React primarily used for?',
        correct_answer:'Frontend web development',
        incorrect_answer:['Backend server development','Mobile app development','Data analysis']
    },
    {
        difficulty:'easy',
        question:'Which of the following is a valid way to declare a variable in JavaScript??',
        correct_answer:'All of the above',
        incorrect_answer:['var myVar = 5;','const myVar = 5;','let myVar = 5;']
    },
    {
        difficulty:'easy',
        question:'In React, what is used to pass data from a parent component to a child component?',
        correct_answer:'Props',
        incorrect_answer:['state','redux','Hooks']
    },
    {
        difficulty:'easy',
        question:'What does JSX stand for?',
        correct_answer:'JavaScript XML',
        incorrect_answer:['JavaScript Extension','JavaScript Syntax XML','JavaScript eXtension']
    },
    {
        difficulty:'easy',
        question:'What is the purpose of the useState hook in React?',
        correct_answer:'To manage component state',
        incorrect_answer:['To fetch data from an API','To create reusable components','To handle user authentication']
    },
    {
        difficulty:'easy',
        question:'Which of the following lifecycle methods is deprecated in React 16+?',
        correct_answer:'componentWillMount',
        incorrect_answer:['componentDidUpdate','componentWillUpdate','componentDidMount']
    },
    {
        difficulty:'easy',
        question:'What is the purpose of the key prop in React when rendering lists?',
        correct_answer:'It uniquely identifies each element in the list',
        incorrect_answer:["It specifies the list item's color","It sets the list item's font size",'It determines the order of list items']
    },
    {
        difficulty:'easy',
        question:'Which JavaScript function is used to add or remove classes from an HTML element?',
        correct_answer:'toggleClass',
        incorrect_answer:['addClass','removeClass','setAttribute']
    },
    {
        difficulty:'easy',
        question:'What is the purpose of the map function in JavaScript?',
        correct_answer:'To create a new array by transforming each element in an existing array',
        incorrect_answer:['To remove elements from an array','To sort an array in descending order','To filter out specific elements from an array']
    },
    {
        difficulty:'easy',
        question:'Which of the following is a valid way to define a function in JavaScript?',
        correct_answer:'All of the above',
        incorrect_answer:['function myFunction() => {}','const myFunction = function() {}','const myFunction = () => {}']
    },
    {
        difficulty:'medium',
        question:'In React, what is the purpose of the useEffect hook?',
        correct_answer:'To perform side effects in function components',
        incorrect_answer:['To manage component state','To fetch data from an API','To handle user authentication']
    },
    {
        difficulty:'medium',
        question:'Which of the following JavaScript array methods creates a new array with all elements that pass a test?',
        correct_answer:'filter()',
        incorrect_answer:[' map()','reduce()','forEach()']
    },
    {
        difficulty:'medium',
        question:'What is the purpose of the React Router library in a React application?',
        correct_answer:'To handle routing and navigation in a single-page application (SPA)',
        incorrect_answer:['To manage state in a React app','To style components in a React app','To create animations in a React app']
    },
    {
        difficulty:'medium',
        question:'Which of the following statements about React components is true?',
        correct_answer:'React components can be either function components or class components.',
        incorrect_answer:['React components must always be class components.','React components can only receive data through props.','React components cannot have state.']
    },
    {
        difficulty:'medium',
        question:'In JavaScript, what is a closure?',
        correct_answer:'A function that has access to its own local variables and the variables in its containing function',
        incorrect_answer:['A built-in JavaScript function','A way to bind data to HTML elements','A function that can only be called once']
    },
    {
        difficulty:'medium',
        question:'What is the purpose of the this keyword in JavaScript?',
        correct_answer:'To reference the current object or context',
        incorrect_answer:['To access the current date and time','To refer to the current function','To create a new instance of an object']
    },
    {
        difficulty:'medium',
        question:'Which method is used to add a new item to the end of an array in JavaScript?',
        correct_answer:'push()',
        incorrect_answer:['pop()','concat()','unshift()']
    },
    {
        difficulty:'medium',
        question:'What is the purpose of the componentDidMount lifecycle method in React class components?',
        correct_answer:'To render the component for the first time',
        incorrect_answer:['To update component state','To perform cleanup after the component is unmounted','To handle user input events']
    },
    {
        difficulty:'medium',
        question:'What is the primary use of the async and await keywords in JavaScript?',
        correct_answer:'To define asynchronous functions',
        incorrect_answer:['To create loops in JavaScript','To specify the order of function execution','To handle exceptions in try-catch blocks']
    },
    {
        difficulty:'medium',
        question:'What does the term "controlled component" refer to in React?',
        correct_answer:"A component that is controlled by external state and can't have its own state",
        incorrect_answer:['A component that manages its own state internally','A component that is connected to a Redux store','A component that uses React Router for navigation']
    },
    {
        difficulty:'hard',
        question:'In React, which lifecycle method is used to perform side effects and clean up resources in class components?',
        correct_answer:'componentDidUpdate',
        incorrect_answer:['componentWillUpdate','componentWillMount','componentWillUnmount']
    },
    {
        difficulty:'hard',
        question:'What is the purpose of the JavaScript Promise object?',
        correct_answer:'To represent a single value that may be available now or in the future',
        incorrect_answer:['To create asynchronous functions in JavaScript','To handle exceptions in try-catch blocks','To define class constructors']
    },
    {
        difficulty:'hard',
        question:'In React, which of the following is a correct way to prevent a component from re-rendering unnecessarily?',
        correct_answer:'Using the shouldComponentUpdate lifecycle method',
        incorrect_answer:['Using the componentDidMount lifecycle method','Wrapping the component in a React.memo higher-order component','Using the componentWillUnmount lifecycle method']
    },
    {
        difficulty:'hard',
        question:'What is the purpose of the Redux library in a React application?',
        correct_answer:'To manage global state and data flow',
        incorrect_answer:['To manage routing and navigation','To handle asynchronous requests','To create user interfaces']
    },
    {
        difficulty:'hard',
        question:'In JavaScript, what is a closure?',
        correct_answer:'A function that has access to its own local variables and the variables in its containing function, even after that containing function has finished executing',
        incorrect_answer:['A built-in JavaScript function','A way to bind data to HTML elements','A function that can only be called once']
    },
    {
        difficulty:'hard',
        question:'Which JavaScript array method can be used to sort an array in place?',
        correct_answer:'sort()',
        incorrect_answer:['map()','filter()','reduce()']
    },
    {
        difficulty:'hard',
        question:'What is the purpose of the async and await keywords in JavaScript when working with asynchronous code?',
        correct_answer:'To pause the execution of a function until a promise is resolved',
        incorrect_answer:['To create asynchronous functions','To define error handling for asynchronous operations','To prevent asynchronous code from running']
    },
    {
        difficulty:'hard',
        question:'What does the term "Hoisting" refer to in JavaScript?',
        correct_answer:'The process of moving variables to the top of their containing function or block',
        incorrect_answer:['The process of creating new functions within existing functions','The process of optimizing JavaScript code for performance','The process of minimizing the memory usage of JavaScript applications']
    },
    {
        difficulty:'hard',
        question:' Which of the following statements about React Fragments is true?',
        correct_answer:'React Fragments allow you to group multiple JSX elements without adding extra nodes to the DOM.',
        incorrect_answer:['React Fragments can only be used in class components.','React Fragments are used to create new React components.','React Fragments are used to add styling to React components.']
    },
    {
        difficulty:'hard',
        question:'In React, what is the purpose of the useReducer hook?',
        correct_answer:'To manage complex state logic in a more predictable way',
        incorrect_answer:['To manage form input fields','To perform AJAX requests','To create custom hooks']
    },
    
]

export default Questions