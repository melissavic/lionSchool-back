var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDS",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];


    const getCurso = function(){
        
        
        let lista = []
        let json = {}
        let erro = true

        cursos.forEach(item=>{
            lista.push(
                {
                    nome: item.nome,
                    sigla: item.sigla,
                    foto: item.icone,
                    carga: item.carga
                }
            )
            erro = false
        })
        if (erro) {
            return false
        }else {
            return lista
        }
    }


    const getNomeCurso = () => {
        let nomes = []
    
        cursos.forEach(item =>{
            nomes.push({
                nomeCurso : item.nome
            })
        })
    }

    module.exports = {
        getCurso, getNomeCurso
    }