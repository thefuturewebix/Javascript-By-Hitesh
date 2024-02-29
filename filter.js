
// Note : foreach cannot return anything  ,thats way we need to use map and filter
//  const coding = ["js" , "ruby" ,"java" , "python ", "cpp"]
        // const newarr = coding.forEach( (item) => {
        //     console.log(item);
        //     return item;
        // })
        // console.log(newarr);

        // For making a new array by any existing array we use map & filter
        // * map return the same Node. or size of arr as existing arr 
        // * Filter returns fiktered arr on the basis of T&F and remove the unwanted elements from the array and save it to the new array

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// ✨first_way
    // const newNum = myNum.filter( (value) => {
    //     console.log(value);
    //     if( value >= 5)
    //         return value;
    // })

// ✨Second_way : Oneliner
// without opening the scope{}
    // const newNum = myNum.filter( (val) => val > 4)  

// if we open a  scope and want to write a condition under the scope we need to return the value because it doesn't impicitly return the value we need to explicitly return the value

    // const newNum = myNum.filter( (val) => {
    //     return val > 4;
    // }) 

    // same Question if we solve this question with help of 
    // const newNum = [];
    // myNum.forEach(val => {
    //     if(val > 4){
    //         newNum.push(val);
    //     }
    // });
    // console.log(newNum);

// Now We are more using the more use cases of the Filter

let myBooks = [
    { title:"book1", genre: "History" , publish: 1990 , edition:2006 , author:"Noen"},    
    { title:"book2", genre: "Biology" , publish: 2010 , edition:1900 , author:"ratan Tata"},    
    { title:"book3", genre: "Mathematics" , publish: 2000 , edition:2100 , author:"JJ thomson"},    
    { title:"book4", genre: "History" , publish: 2005 , edition:2005 , author:"RJ sharma"},    
    { title:"book5", genre: "science" , publish: 2001 , edition:2011 , author:"RJ shukla"},    
    { title:"book6", genre: "History" , publish: 1900 , edition:2019 , author:"Rajiv"}   
];


let filteredBooks = myBooks.filter( (bk) => bk.publish>=2000 && bk.edition>=2000);
console.log(filteredBooks);