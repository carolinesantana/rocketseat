//dados
const proffys = [
    {
    name: "Carol",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "0000",
    bio: "Hello",
    subject: "Matemática",
    cost: "40",
    weekday: [
        1
    ],
    time_from: [720],
    time_to: [1220]
    },

    {
        name: "Renan",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "0000",
        bio: "Hello",
        subject: "Matemática",
        cost: "40",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
        },

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",                        
    "Educação física",
    "Física",
    "Geografia",                  
    "História",
    "Matemática", 
    "Português",                    
    "Química"                      
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira", 
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

//funcionalidades
function getSubject (subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding (req,res) {
    return res.render("index.html")
}

function pageStudy (req,res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req,res) {
    const data = req.query

    //se tiver dados
    const isNotEmpty = Object.keys(data).length != 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        //adc a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    //se nao, mostrar página
    return res.render("give-classes.html", {subjects, weekdays})
}

//servidor
const express = require('express');
const server = express()

//configurar nunjucks (templete enginee)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//inicializandoo servidor
server
    //configurar arqs estaticos, css, js, images
    .use(express.static("public"))
    //config rotas da app
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .listen(3300)