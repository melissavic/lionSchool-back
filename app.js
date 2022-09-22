
/******************************************************
 * Objetivo: Desenvolver um sistema da Lion School 
 * Data: 15/09/22
 * Autor: Melissa Victória 
 ****************************************************/


 const express = require('express')
 const cors = require('cors')
 const bodyParser = require('body-parser')
    
   const {getNames} = require('./modulos/alunos.js')
   const {getAlunoCurso} = require('./modulos/alunos.js')
   const {getStatus} = require('./modulos/alunos.js')
   const {response} = require('express')


 const app = express()

 app.use((request,response,next) => {
    response.header('Acces-Control-Allow-Origin', '*' )  
    response.header('Acces-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS')

    app.use(cors())
    next()



    //Endpoint listagem de alunos
    app.get('/alunos/', cors(), async function(request,response,next) {

        let chave = request.params.alunos
        let alunos = getNames(chave)

        if(alunos){
            response.status(200)
            response.json(alunos)
        } else{
            response.status(404)
        }

    })


   //Endpoint chamada dos alunos de acordo com o curso
   app.get('/estudantes/:cursos', cors(), async function(request,response,next){

    let chave = request.params.cursos
    let estudantes = getAlunoCurso(chave)

    if(estudantes){
        response.status(200)
        response.json(estudantes)
    } else{
        response.status(404)
      }
   })


   //Endpoint listagem de status
   app.get('/status/:matricula', cors(), async function(request,response,next){

    let chave = request.params.matricula
    let status = getStatus(chave)

    if(status){
        response.status(200)
        response.json(status)
    } else{
        response.status(404)
    }

   })

   //Endpoint situacao do aluno (cursando/finalizado)
   app.get('/situacao/:estado', cors(), async function(request,response,next){

    let chave = request.params.estado
    let situacao  = getStatusEst(chave)

    if(situacao){
        response.status(200)
        response.json(situacao)
    }else{
        response.status(404)
    }

   })

   app.listen(8080, function(){
    console.log('Servidor aguardando requisiçoes.')
  })
 })