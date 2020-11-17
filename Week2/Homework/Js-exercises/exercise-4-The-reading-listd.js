let myBooksList=[
    {
        title:'The Hobbit',
        author:'J.R.R.Tolkien',
        alreadyRead:'true',
    },

    {
        title:'The Lord of the Rings',
        author:'J.R.R.Tolkien',
        alreadyRead:'false',
    },

    {
        title:'Harry Potter',
        author:'J.K.Rowling',
        alreadyRead:'true',
    },
]
for (let i = 0; i<= 2; i++){
console.log(myBooksList[i].title +  ' by '  + myBooksList[i].author);
if (myBooksList[i].alreadyRead === 'true')
{console.log("I already read " + myBooksList[i].title )}
else{console.log("I still need to read " +  myBooksList[i].title )}
}
