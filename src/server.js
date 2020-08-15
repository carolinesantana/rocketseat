//servidor
const express = require('express');
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjucks (templete enginee)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//inicializandoo servidor
server
    //receber dados do req body
    .use(express.urlencoded({ extended: true})) 
    //configurar arqs estaticos, css, js, images
    .use(express.static("public"))
    //config rotas da app
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses)
    .listen(3300)