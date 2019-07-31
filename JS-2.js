//1. Find Highest Number inside an array
//Write a function that takes an array returns highest number of the array

var numbers = [1,4,55,23,44,63,33,111,233]
var highest = 0;

for (var i = 0;i <numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
}
console.log(highest)



//2. count words inside a string
//Write a function that takes and retruns a number of words. ('words leave after space')

//Example input: countWords('Hello World!')
//Example output: "2"

function countWords(string){

    return string.split(' ').length

}
console.log(countWords('Hello World!'));
   



//3. find number of the letters
//write a function that takes 2 elements one is a letter the other is an array.

//first convert to array to a string. return numbers of the letters inside the string

//Example input: countLetters('e',['Hello','Worlds!'])
//Example output: "1"

function countLetters(e, str){
    let newArr = str.join(' ')
    console.log(newArr)
    var count = 0;
    for (let i = 0; i < newArr.length; i++) {
      if ( e === newArr[i])
      count++
    }
    return count
  }
  console.log(countLetters('e',['Hello','Worlds!']))





//Simple Algorithms
//1. Reverse text
//Given a string of characters as input, write a function that 
//returns it with the characters reversed. 
//Don't use reverse function, use loops.

//Example input: reverseText(Hello World!)
//Example output: "!dlroW olleH"

function reverseText(words){

    let reverseOfText = words.split()
        console.log(reverseOfText)

        let temp="";
      for (let i = words.length -1; i >= 0; i--) {
          
            temp= temp+words[i];
          
      }
      console.log(temp);
}
reverseText('Hello World!')





//2. Palindrome checker
//A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this. Don't use reverse function, 
//use loops.

//Example input: isPalindrome('kayak')
//Example output: true

//Example input: isPalindrome('name')
//Example output: false

function isPalindrome (string) {
    
    for (let i = string.length-1; i >= 0; i-- ){

    }

    if (string == string.split('').reverse().join('')) {
        return(string + 'is a palindrome');
    }
    else {
        return(string + 'is not a palindrome');
    }
}
console.log(isPalindrome(' kayak '))



//3. FizzBuzz
//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; 
//when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”. Use for loops.

//Example input: fizzBuzz(11)
//Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]

function myNum(number) {
    let myArray=[]
   
    for (let x = 1; x <= number; x++)
    
    
    if (x % 3 === 0 && x % 2 === 0 ){
        myArray.push("fizzBuzz");
    }
    else if ( x % 2 === 0) {
        myArray.push("Fizz");
    }
    else if (x % 3 === 0) {
        myArray.push("Buzz");
    }
    else {
        myArray.push(x)
    }
    console.log(myArray)
}
myNum(11)

    




//4. Reverse Array
//Given an array of items, reverse the order. Don't use reverse function, use loops.

//Example input: reverseArray([22, 'hi', 12])
//Example output: [12, 'hi', 22]

function reverseNum(arr) {
    var i = 0;
    while (i < arr.length - 1) {
      arr.splice(i, 0, arr.pop());
      i++;
    }
    return arr;
  }
  
  
  var arr = [22, 'hi', 12];
  console.log(reverseNum(arr));


//5. Reverse Words
//Given a phrase, reverse the order of the characters of each word. Don't use reverse function, use loops.

//Example input: reverseWords('I love JavaScript!')
//Example output: 'I evol !tpircSavaJ'

function reverseWords(text){

    let wordsOfText = text.split(' ')
    console.log(wordsOfText)

        for (let i = 0; i < wordsOfText.length; i++) {
            
            let word = wordsOfText[i];

            let temp="";
            for (let x = word.length -1; x >= 0; x--) {
               temp= temp+word[x];
        
            }
                console.log(temp)
            
        }
}
reverseWords('I Love Javascript!')
    

        
//6. Capitalization
//Given a phrase, capitalize every word.

//Example input: capitalizeWords('i love javaScript!')
//Example output: 'I Love JavaScript!


function capitalizeWords(words){

    let capWords = words.split()
    console.log(capWords);
}

capitalizeWords('I Love Javascript! or I LOVE JAVASCRIPT!')


//7. Subtract two Sets
//Given two arrays that contains integers, remove the integers of second array from the first.

//Example input: subctractArray([1, 2, 4, 6], [2, 6])
//Example output: [1, 4]

numbers1=[1,2,4,6];
myNum2=[2,6];

for (let i=0; i<myNum2.length; i++ ){

   console.log(numbers1.indexOf(myNum2[i]));

   position=(numbers1.indexOf(myNum2[i]));

   numbers1.splice(position,1);
}
console.log(numbers1);
        
