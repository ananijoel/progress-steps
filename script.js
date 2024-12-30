const circles = document.querySelectorAll('.circle')
const progressbar = document.querySelector('.indicator')
const buttons = document.querySelectorAll('.buttons button')
const display = document.querySelector('.display')

const livres = [
    {
        titre: "Don Quichotte",
        auteur: "Miguel de Cervantes",
        anneePublication: "1605",
        genre: "Aventure",
    },
    {
        titre: "Les Misérables",
        auteur: "Victor Hugo",
        anneePublication: "1862",
        genre: "Roman historique",
    },
    {
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        anneePublication: "1943",
        genre: "Conte philosophique",
    },
    {
        titre: "1984",
        auteur: "George Orwell",
        anneePublication: "1949",
        genre: "Dystopie",
    },
    {
        titre: "L'Alchimiste",
        auteur: "Paulo Coelho",
        anneePublication: "1988",
        genre: "Roman philosophique",
    },
    {
        titre: "Harry Potter à l'école des sorciers",
        auteur: "J.K. Rowling",
        anneePublication: "1997",
        genre: "Fantasy",
    }
];




let currentStep = 1;

const updateSteps = (e)=>{
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep
    console.log(currentStep)
    circles.forEach((circle,index) =>{
        circle.classList[`${index < currentStep ? "add" : "remove" }`]("active")
    })
    display.innerHTML =''
    const currentLivre = livres[currentStep - 1]; 
    for (let key in currentLivre) {
        if (currentLivre.hasOwnProperty(key)) { 
            
            const p = document.createElement('p');
            p.innerHTML = `${currentLivre[key]}`;
            display.appendChild(p); 
        }
    }
    
    progressbar.style.width = `${((currentStep -1)/(circles.length-1))*100}%`

    if(currentStep === circles.length){
        buttons[1].disabled = true
    } else if (currentStep === 1){
        buttons[0].disabled = true
    } else {
        buttons.forEach((button)=> (button.disabled = false) )
    }
        
}

buttons.forEach(button=>{
    button.addEventListener("click", updateSteps)
})