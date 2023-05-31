// # Descrizione
    // * Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
        // * Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.
        // * Unsplash (https://unsplash.it/300/300?image=<id>)

// # Milestone 1
    // * Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// # Milestone 2
    // * Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
    // * Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// BONUS

    // Formattare le date in formato italiano (gg/mm/aaaa)
    // Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
    // Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.



const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const containerElement = document.getElementById ("container")

posts.forEach ((obj) => {
    const id = obj.id
    const content = obj.content
    const media = obj.media
    const {name, image} = obj.author
    const likes = obj.likes
    const created = obj.created
    
    createPost(id, content, media, name, image, likes, created)
})

const likeButtons = document.querySelectorAll ("a.like-button")
const likeCounters = document.querySelectorAll ("b.js-likes-counter")
const likedPosts = []

for (let i = 0 ; i < posts.length ; i++) {
    const singleLikeButton = likeButtons[i]
    const singleLikeCounter = likeCounters[i]

    singleLikeButton.addEventListener ("click", () => {
        singleLikeButton.classList.add ("like-button--liked")
        singleLikeCounter.innerText = posts[i].likes + 1

        const likedPost = posts[i]
        likedPosts.push (likedPost)
        console.log (likedPosts)
    })
}


// ! FUNCTIONS ......................................................................
/**
 * Creates a post populating container with innerHTML
 * @param {number} id 
 * @param {string} content 
 * @param {string} media 
 * @param {string} name 
 * @param {string} image 
 * @param {number} likes 
 * @param {string} created 
 */
function createPost (id, content, media, name, image, likes, created) {
    containerElement.innerHTML += `
        <div class="post" id="n${id}">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${image}" alt="${name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">
                ${content}
            </div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#n${id}" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">
                                Mi Piace
                            </span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a
                        <b id="like-counter-${id}" class="js-likes-counter">
                            ${likes}
                        </b>
                        persone
                    </div>
                </div> 
            </div>            
        </div>
    `
}