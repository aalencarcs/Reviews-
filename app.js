// local Reviews data

const reviews = [
    {   
        id: 1,
        name: "Susan Smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:   "Making your dreams come true, for some people it’s nothing but a dream, but for me it’s a way of life!",
    },

    {
        id:2,
        name : "anna johnson",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        job : "web designer",
        text: "You can call me Super Mario and my power is to fight problems even when they seem unsolvable! There is no Impossible for me!",


    },
    {
        id: 3,
        name: "peter jones",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        job: "intern",
        text : " am a creative person who likes to think about issues and look for solutions to problems."
    },

    {
        id: 4,
        name: "bill anderson",
        job: "The boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "I started drawing at my mother’s house walls." + 
        "Later on i made my way on Visual Arts.Being creative it’s not just about technique, it’s an attitude.",


    },
];

// Select Items

    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");


    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const randomBtn = document.querySelector(".btn");


    let currentItem = 0;


    window.addEventListener("DOMContentLoaded", function() {
        showPerson();
    })



    function showPerson() {
        const person = reviews[currentItem];
        img.src = person.img;
        author.textContent = person.name;
        job.textContent = person.job.toUpperCase();
        info.textContent = person.text;

    }

    nextBtn.addEventListener("click", function() {
        currentItem++;
        if(currentItem > reviews.length-1) {
            currentItem = 0;
        }
        showPerson();

    })

    prevBtn.addEventListener("click", function() {
        currentItem--;
        if(currentItem <0) {
            currentItem = reviews.length-1;

        }

        showPerson();


    })

    randomBtn.addEventListener("click", function() {
        currentItem = randomItem();
        
        showPerson();


    })



function randomItem () {
   return  Math.floor(Math.random() * reviews.length)

}


