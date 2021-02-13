import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import './App.css'
import api from "./services/api.ts";

function App() {

    const [projects, setProjects] = useState<any[]>([])
    const [token, setToken] = useState('')

    useEffect(() => {
        getCategorias()
    }, [])

    async function getCategorias() {
        api.get('/categorias').then(response => {
            setProjects(response.data)
        })
    }

    async function handleAddProject() {
        const tokenNovo = await api.post('/login',{
            "email": "felipesoares_1993@hotmail.com",
            "senha": "123"
        }).then((res) => {
            //git initconsole.log(res.headers.authorization)
            return res.headers.authorization
        }).catch((error) => {
            console.log(error)
        })


        await api.post('/categorias', {nome: 'Fillipe'}, {headers: {'Authorization': tokenNovo}})
        setProjects([...projects, getCategorias()])
    }

    //console.log(projects)
    return (
        <>
            <Header title='HomePage'/>
            {/*<img src={background} width={300}/>*/}
            <ul>
                {projects.map(project => <li key={project.id}>{project.nome}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adiconar Projeto</button>
        </>
    );
}

export default App;
