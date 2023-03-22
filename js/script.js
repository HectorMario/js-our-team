const names = document.querySelectorAll('.names');
const info = document.querySelectorAll('.description')

const team = [
    {
        nome: "Wayne Barnell",
        job: "Founder & CEO"
    },
    {
        nome: "Angela Caroll",
        job: "Chief Editor"
    },
    {
        nome: "Walter Gordon",
        job: "Office Manager"
    },
    {
        nome: "Angela Lopez",
        job: "Social Media Manager"
    },
    {
        nome: "Scott Estrada",
        job: "Developer"
    },
    {
        nome: "Barbara Ramos",
        job: "Grapgic Designer"
    }   
]

function metela(){
    for(let i=0; i < names.length; i++){
        names[i].innerHTML = team[i].nome
        info[i].innerHTML = team[i].job
    }
}
console.log(team[1].nome)
metela();