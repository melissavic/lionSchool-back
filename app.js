
/******************************************************
 * Objetivo: Desenvolver um sistema da Lion School 
 * Data: 15/09/22
 * Autor: Melissa Victória 
 * Versão: 1.3
 ****************************************************/


const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {getNames} = require('./modulos/alunos.js')
const {getAlunoCurso} = require('./modulos/alunos.js')
const {getStatus} = require('./modulos/alunos.js')
const {getCurso} = require('./modulos/cursos.js')
const {getStatusEst} = require('./modulos/alunos.js')
const {getDisciplina} = require('./modulos/alunos.js')
const {getNomeCurso} = require('./modulos/cursos.js')
const {response, request} = require('express')


const app = express()

app.use((request, response, next) => {
    response.header('Acces-Control-Allow-Origin', '*')
    response.header('Acces-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS')

    app.use(cors())
    next()


})
    // Endpoint que lista os cursos
    app.get('/cursos/', cors(), async function (request, response, next) {
      
        let cursos = getCurso()

        if (cursos) {
            response.status(200)
            response.json(cursos)
        } else {
            response.status(404)
        }

    })

    //Endpoint listagem dos alunos de sistema
    app.get('/sistema/:alunos', cors(), async function (request, response, next) {

        let sistema = getNames()

        if (sistema) {
            response.status(200)
            response.json(sistema)
        } else {
            response.status(404)
        }

    }) 

    //Endpoint listagem dos alunos de acordo com seu curso
    app.get('/alunos/:curso', cors(), async function (request, response, next) {

        let chave = request.params.curso
        let alunos = getAlunoCurso(chave)

        if (alunos) {
            response.status(200)
            response.json(alunos)
        } else {
            response.status(404)
        }
    })

    //Endpoint listagem de acordo com a matricula
    app.get('/status/:matricula', cors(), async function (request,response, next) {

        let chave = request.params.matricula
        let status = getStatus(chave)

        if (status) {
            response.status(200)
            response.json(status)
        } else {
            response.status(404)
        }
    })


    //Endpoint listagem de acordo com a situacao do curso
    app.get('/statos/:estado', cors(), async function (request,response, next) {

        let chave = request.params.estado
        let statos = getStatusEst(chave)

        if (statos) {
            response.status(200)
            response.json(statos)
        } else {
            response.status(404)
        }
    })


    //Endpoint listagem das disciplinas
    app.get('/alunos/disciplina/matricula/:matricula', cors(), async function(request,response,next){
        
        let chave = request.params.matricula
        let matricula = getDisciplina(chave)
        
        if(matricula){
            response.status(200)
            response.json(matricula)
        } else{
            response.status(404)
        }

    })

    app.listen(8080, function () {
        console.log('Servidor aguardando requisiçoes.')
    })
