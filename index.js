const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// let string = "I am a string"
// let newString = string.split(' ')

// console.log(newString);
// const tutorialWords = tutorials.map(tutorial => tutorial.split(" "));

// console.log(split)

const titleCased = () => {
  const newArr = tutorials.map(element => element = element.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" "))
  return newArr
}

console.log(titleCased())