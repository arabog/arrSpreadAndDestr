/* Create a function shuffleIt. The function accepts two or more parameters. 
The first parameter arr is an array of numbers, followed by an arbitrary 
number of numeric arrays. Each numeric array contains two numbers, 
which are indices for elements in arr (the numbers will always be within 
bounds). For every such array, swap the elements. Try to use all your 
new skills: arrow functions, the spread operator, destructuring, 
and rest parameters.

Example:*/
// para two or more parameter: an arr and indices
// return swap arr of the exact indices

// Using for loops
let shuffleIt = (arr, ...indices)=>{
          // use rest operator
          let [...k] = indices

          // loop via each arr
          for(let i = 0; i < k.length; i++) {
                    // use destructuring and spread
                    let [a, b] = [...k[i]];

                    [arr[b], arr[a]] = [arr[a], arr[b]]
          }

          return arr;
}

// using forEach() method
let shuffleIt = (arr, ...indices)=>{
          // use rest operator
          let [...k] = indices

          // loop via each arr
          k.forEach(ele => {
             // use destructuring and spread
                    let [a, b] = [...ele];

                    [arr[b], arr[a]] = [arr[a], arr[b]]
          })
                   

          

          // return arr;
          console.log(arr);
}

shuffleIt([1,2,3,4,5],[1,2]) //should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) //should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) //should return [1,3,5,2,4]