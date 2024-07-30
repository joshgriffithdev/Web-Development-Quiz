const questions = [
    {
      id: 1,
      question: "Which of the following is not a reserved word in JavaScript?",
      cAnswer: "program",
      wAnswer1: "interface",
      wAnswer2: "throws",
      wAnswer3: "short"
    },
    {
      id: 2,
      question: "Which of the following is the correct way to write a comment in JavaScript?",
      cAnswer: "//",
      wAnswer1: "#",
      wAnswer2: "/",
      wAnswer3: "**"
    },
    {
      id: 3,
      question: "Which of the following is not a primative data type?",
      cAnswer: "Array",
      wAnswer1: "Boolean",
      wAnswer2: "Bigint",
      wAnswer3: "Symbol"
    },
    {
      id: 4,
      question: 'What will the following code output: console.log(1 + "1");?',
      cAnswer: "11",
      wAnswer1: '"1+1"',
      wAnswer2: "2",
      wAnswer3: "1"
    },
    {
      id: 5,
      question: "Which method is used to add one or more elements to the end of an array and return the new length of the array?",
      cAnswer: "push()",
      wAnswer1: "pop()",
      wAnswer2: "shift()",
      wAnswer3: "add()"
    },
    {
      id: 6,
      question: "Which of the following is a JavaScript framework?",
      cAnswer: "React",
      wAnswer1: "Django",
      wAnswer2: "Laravel",
      wAnswer3: "Rails"
    },
    {
      id: 7,
      question: "How do you create a function in JavaScript?",
      cAnswer: "function myFunction()",
      wAnswer1: "function:myFunction()",
      wAnswer2: "function = myFunction()",
      wAnswer3: "func myFunction()"
    },
    {
      id: 8,
      question: "How do you find the number with the highest value of x and y in JavaScript?",
      cAnswer: "Math.max(x, y)",
      wAnswer1: "Math.ceil(x, y)",
      wAnswer2: "Math.floor(x, y)",
      wAnswer3: "Math.round(x, y)"
    },
    {
      id: 9,
      question: "Which operator is used to assign a value to a variable?",
      cAnswer: "=",
      wAnswer1: "==",
      wAnswer2: "*",
      wAnswer3: "-"
    },
    {
      id: 10,
      question: "Which keyword do you use to access elements from the DOM?",
      cAnswer: "document",
      wAnswer1: "html",
      wAnswer2: "HTML",
      wAnswer3: "DOM"
    },
    {
      id: 11,
      question: "What does it mean when you get a reference error?",
      cAnswer: "You used a variable that hasn't been declared in the current scope.",
      wAnswer1: "You misspelled a keyword.",
      wAnswer2: "You didn't save any changes you have made.",
      wAnswer3: "You incorrectly used a built-in function."
    },
    {
      id: 12,
      question: "What is the correct way to create a new empty object in JavaScript?",
      cAnswer: "var obj = {};",
      wAnswer1: "var obj = new Object();",
      wAnswer2: "var obj = Object.create();",
      wAnswer3: "var obj = Object();"
    },
    {
      id: 13,
      question: "What is it called when you join 2 strings together?",
      cAnswer: "concatenating",
      wAnswer1: "joining",
      wAnswer2: "fusing",
      wAnswer3: "amalgamating"
    },
    {
      id: 14,
      question: "What is the true or false data type called?",
      cAnswer: "Boolean",
      wAnswer1: "Float",
      wAnswer2: "Condition",
      wAnswer3: "Method"
    },
    {
      id: 15,
      question: "What is the purpose of the Array.prototype.forEach() method?",
      cAnswer: "To execute a provided function once for each array element.",
      wAnswer1: "To create a new array with all elements that pass a test provided by a function.",
      wAnswer2: "To sort the elements of an array.",
      wAnswer3: "To apply a function to each element of the array and reduce it to a single value."
    },
    {
      id: 16,
      question: "What does HTML stand for?",
      cAnswer: "Hyper Text Markup Language",
      wAnswer1: "Hyper Tool Markup Language",
      wAnswer2: "Hyperlinks and Text Markup Language",
      wAnswer3: "Home Tool Markup Language"
    },
    {
      id: 17,
      question: "Which tag is used to define an unordered list in HTML?",
      cAnswer: "<ul>",
      wAnswer1: "<list>",
      wAnswer2: "<li>",
      wAnswer3: "<ol>"
    },
    {
      id: 18,
      question: "Which attribute is used to specify the URL of the page that the link goes to in HTML?",
      cAnswer: "href",
      wAnswer1: "src",
      wAnswer2: "link",
      wAnswer3: "url"
    },
    {
      id: 19,
      question: "Which attribute is used to provide an alternative text for an image if the image cannot be displayed in HTML?",
      cAnswer: "alt",
      wAnswer1: "src",
      wAnswer2: "title",
      wAnswer3: "text"
    },
    {
      id: 20,
      question: "In HTML, which tag is used to define a table row?",
      cAnswer: "<tr>",
      wAnswer1: "<td>",
      wAnswer2: "<table>",
      wAnswer3: "<th>"
    },
    {
      id: 21,
      question: "Which tag is used to define a division or a section in an HTML document?",
      cAnswer: "<div>",
      wAnswer1: "<span>",
      wAnswer2: "<section>",
      wAnswer3: "<break>"
    },
    {
      id: 22,
      question: "Which of the following is not a HTML tag?",
      cAnswer: "<text>",
      wAnswer1: "<iframe>",
      wAnswer2: "<h6>",
      wAnswer3: "<!DOCTYPE>"
    },
    {
      id: 23,
      question: "What Emmet Abbreviation do you use to make a boiler plate?",
      cAnswer: "!",
      wAnswer1: "!!!",
      wAnswer2: "bp",
      wAnswer3: "template"
    },
    {
      id: 24,
      question: "What tag allows you to use Javascript in HTML?",
      cAnswer: "<script>",
      wAnswer1: "<js>",
      wAnswer2: "<javascript>",
      wAnswer3: "<code>"
    },
    {
      id: 25,
      question: "Which of the following is not a programming language",
      cAnswer: "CSS",
      wAnswer1: "Javascript",
      wAnswer2: "HTML",
      wAnswer3: "SQL"
    },
    {
      id: 26,
      question: "What does CSS stand for?",
      cAnswer: "Cascading Style Sheets",
      wAnswer1: "Creative Style Sheets",
      wAnswer2: "Computer Style Sheets",
      wAnswer3: "Code Style Sheets"
    },
    {
      id: 27,
      question: "Which CSS property is used to change the text color of an element?",
      cAnswer: "color",
      wAnswer1: "text-color",
      wAnswer2: "font-color",
      wAnswer3: "text-style"
    },
    {
      id: 28,
      question: "Which CSS property controls the space between the elements inside a box?",
      cAnswer: "padding",
      wAnswer1: "margin",
      wAnswer2: "spacing",
      wAnswer3: "border-spacing"
    },
    {
      id: 29,
      question: "In CSS, which symbol is used to target a class element?",
      cAnswer: ".",
      wAnswer1: "#",
      wAnswer2: "*",
      wAnswer3: "_"
    },
    {
      id: 30,
      question: "Which of the following is not a type of measurement in CSS?",
      cAnswer: "vp",
      wAnswer1: "px",
      wAnswer2: "rem",
      wAnswer3: "em"
    },
    {id: 31,
      question: "What does SQL stand for?",
      cAnswer: "Structured Query Language",
      wAnswer1: "Sequential Query Language",
      wAnswer2: "Standard Query Language",
      wAnswer3: "Simple Query Language"
    },
    {
      id: 32,
      question: "In SQL, which clause is used to filter records based on a specified condition?",
      cAnswer: "WHERE",
      wAnswer1: "HAVING",
      wAnswer2: "FILTER",
      wAnswer3: "CONDITION"
    },
    {
      id: 33,
      question: "Which SQL keyword is used to read data from a database?",
      cAnswer: "SELECT",
      wAnswer1: "READ",
      wAnswer2: "USE",
      wAnswer3: "GET"
    },
    {
      id: 34,
      question: "Which SQL statement is used to delete data from a database table?",
      cAnswer: "DELETE",
      wAnswer1: "REMOVE",
      wAnswer2: "DROP",
      wAnswer3: "ERASE"
    },
    {
      id: 35,
      question: "Which SQL statement is used to add new data to a database table?",
      cAnswer: "INSERT",
      wAnswer1: "ADD",
      wAnswer2: "CREATE",
      wAnswer3: "UPDATE"
    },
    {
      id: 36,
      question: "Which SQL statement is used to change existing data in a database table?",
      cAnswer: "UPDATE",
      wAnswer1: "MODIFY",
      wAnswer2: "ALTER",
      wAnswer3: "CHANGE"
    },
    {
      id: 37,
      question: "What does the SQL GROUP BY clause do?",
      cAnswer: "Groups rows that have the same values into summary rows",
      wAnswer1: "Orders records in a descending order",
      wAnswer2: "Filters records based on a specified condition",
      wAnswer3: "Combines data from multiple tables"
    },
    {
      id: 38,
      question: "What is React?",
      cAnswer: "A JavaScript library for building user interfaces",
      wAnswer1: "A programming language",
      wAnswer2: "A programming language",
      wAnswer3: "A database management system"
    },
    {
      id: 39,
      question: "Which of the following is used to render a React component into the DOM?",
      cAnswer: "ReactDOM.render()",
      wAnswer1: "React.renderComponent()",
      wAnswer2: "ReactDOMComponent.render()",
      wAnswer3: "ReactComponent.render()"
    },
    {
      id: 40,
      question: "In React, how do you pass data from a parent component to a child component?",
      cAnswer: "Using props",
      wAnswer1: "Using state",
      wAnswer2: "Using setState()",
      wAnswer3: "Using data"
    },
    {
      id: 41,
      question: "How do you handle events in React?",
      cAnswer: "Inline event handlers like onClick={handleClick}",
      wAnswer1: "Using addEventListener()",
      wAnswer2: "Only through Redux",
      wAnswer3: "Events are not handled in React"
    },
    {
      id: 42,
      question: "What is React Router used for?",
      cAnswer: "Handling navigation and routing in React applications",
      wAnswer1: "Managing state in React applications",
      wAnswer2: "Handling authentication in React applications",
      wAnswer3: "Managing network requests in React applications"
    },
    {
      id: 43,
      question: "In React, what keyword denotes a hook?",
      cAnswer: "use",
      wAnswer1: "react",
      wAnswer2: "hook",
      wAnswer3: "set"
    },
    {
      id: 44,
      question: "What is JSX in React?",
      cAnswer: "JavaScript XML",
      wAnswer1: "JavaScript External XML",
      wAnswer2: "JavaScript Extended XML",
      wAnswer3: "JavaScript XPath"
    },
    {
      id: 45,
      question: "What is Node.js?",
      cAnswer: "A server-side JavaScript runtime environment",
      wAnswer1: "A front-end JavaScript framework",
      wAnswer2: "A browser-based application development tool",
      wAnswer3: "A relational database management system"
    },
    {
      id: 46,
      question: "Which command is used to initialize a new Node.js project with npm?",
      cAnswer: "npm init",
      wAnswer1: "node init",
      wAnswer2: "npm start",
      wAnswer3: "npm create"
    },
    {
      id: 47,
      question: "What does npm stand for?",
      cAnswer: "Node Package Manager",
      wAnswer1: "Node Programming Method",
      wAnswer2: "Node Package Maker",
      wAnswer3: "Node Programming Module"
    },
    {
      id: 48,
      question: "How do you include external modules in a Node.js application?",
      cAnswer: "Using require()",
      wAnswer1: "Using import",
      wAnswer2: "Using use()",
      wAnswer3: "Using module()"
    },
    {
      id: 49,
      question: "Which core module in Node.js is used for creating a web server?",
      cAnswer: "http",
      wAnswer1: "fs",
      wAnswer2: "url",
      wAnswer3: "path"
    },
    {
      id: 50,
      question: "Which command is used to start a Node.js application in development mode with automatic restart on file changes?",
      cAnswer: "npm run dev",
      wAnswer1: "node start",
      wAnswer2: "npm start",
      wAnswer3: "node"
    },
  ];

  export default questions;