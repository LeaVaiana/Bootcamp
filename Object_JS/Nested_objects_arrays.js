//ARRAY of posts in a WEBSITE, each post an object with the following properties: title, like, comments...

//

//iniziamo creando un array di post, e dentro gli mettiamo un oggetto con le sue proprietá.

var posts = [
    {
        title: "Chemistry and kitchen",
        author: "Federico",
        comments: ["fantastic post", "terrible post"]
    },
    {
        title: "Piano & Cello",
        author: "Lea",
        comments: ["I like it", "stupid"]
    }
]

//per chiamarlo
posts //ottengo

(2) [{...},{...}]
    0: {title: "Chemistry and kitchen",author: "Federico",comments: Array(2)}
    1: {title: "Piano & Cello",author: "Lea",comments: Array(2)]}
    lenght: 2

posts.lenght // 2 (sono 2 items, ognuno è un oggetto, ogni oggetto ha un autore e commenti)
posts[0].title //cats are terrible (ottengo il titolo del primo post)
posts[1].comments // ottengo i due commenti del secondo post ["I like it", "stupid"]
posts[1].comments[1]// ottengo il secondo commento del secondo post


//esempio 1:
var someObject = {
    friends: [
        {name: "Lea"},
        {name: "Federico"},
        {name: "Miriam"}
    ],
    color: "purple",
    isEvil: true
};
//per ottenere "Lea": prima dobbiamo entrare nell array friends
someObject.friends[0].name // "Lea"
someObject.friends[1].name // "Federico"
someObject.color //"purplee"
someObject.isEvil // true