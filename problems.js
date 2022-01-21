//SUM ZERO 
//runtime is O(n^2)

function addToZero(array){
    //console.log('array', array)
    for(let i = 0; i < array.length; i++){
       //console.log('i is', array[i])

       for(let j = 1; j < array.length; j++){
        //console.log('i is', array[i], 'j', array[j])
            let sum = array[i] + array[j] 
            //console.log('sum is', sum)

            if(sum === 0){
                console.log(true)
                break;
            }else{
               console.log(false)
               break;
            }
       }
    }

}



// addToZero([]);
// addToZero([1]);
// addToZero([1, 2, 3]);
//addToZero([1, 2, 3, -2]);

//UNIQUE CHARACTERS // O(n)

function hasUniqueChars(string){
    let lowerCase = string.toLowerCase();
    let splitStr =  lowerCase.split('')
    let newSet = new Set(lowerCase)
    let uniqueArray = [...newSet]
   // console.log('unique is', uniqueArray.length, splitStr.length)

    if(uniqueArray.length === splitStr.length){
        console.log('is uniqe', true)
    }else{
        console.log('not unique', false)
    }

}

//hasUniqueChars("Monday");
//hasUniqueChars("Moonday");

//PANGRAM SENTENCE O(1)
function isPangram(string){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let newStr = string.split(' ').join('').toLowerCase()
   // console.log('split', splitStr)
   let count = 0

   alphabet.forEach(letter =>{
       if(newStr.includes(letter)){
           count += 1
       }
   })

  // console.log('count is', count)
  if(count === 26){
      console.log('pangram', true)
  }else{
      console.log('not', false)
  }



}


//isPangram("The quick brown fox jumps over the lazy dog!");
//isPangram("I like cats, but not mice");

//LONGEST WORD O(1)
function findLongestWord(array){

    let length = []

    array.forEach(word =>{
       // console.log('word is', word.length)
        length.push(word.length)
    })

    //console.log('length', length)
    let max = Math.max(...length)
    console.log('max is', max)
}


findLongestWord(["hi", "hello"])