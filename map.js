                // ✨map✨
        // Map Automotically Returns the Value we donot need to use return to return the function value 

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const newNum = myNumber.map( (val) => val+10 )
                // Here similarly if we open the scopes {} then we need to use return to return the value 
                
    // ✨Chaining✨
    // we can apply map&filter function over a map function this is called chaining in Js 
    
let newNum = myNumber.map((num) => num * 10 ).map((num) => num+1);
console.log(newNum);

newNum = myNumber.map((num) => num * 10 ).map((num) => num+1).filter((num) => num>40);
console.log(newNum);
