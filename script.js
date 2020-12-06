// Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}
cat.complain();


// Question 2
let heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em" ;

// Question 4 
heading = document.querySelector(".subheading"); 


// Question 5
let paragraphs = document.querySelectorAll("p");
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}

// Question 6
const resultContainer = document.querySelector(".results")
resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow";



// Question 7
const cats = [
    {
        name: "Blob",
        age: 10,
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21,
    }
];

function myFunction(list){

    for(var i = 0; i < list.length; i++){
        console.log(list[i]);
    }
};
myFunction(cats);




/* Question 8 --> I get all the objects from the array showing in the console, but they do not appear in the element or html page. Only the last object of the array is seen. Please show me how to write the correct syntax for this question. */

const catsContainer = document.getElementById('cat-container');
const myDiv = document.createElement('div')
catsContainer.appendChild(myDiv)

function createCats(cats) {
    for(var i = 0; i < cats.length; i++){
        console.log(cats[i].name + cats[i].age);
        myDiv.innerHTML = '<h5>' + cats[i].name + '</h5>' + '<p>' + cats[i].age + '</p>';
    }
};

createCats(cats)






