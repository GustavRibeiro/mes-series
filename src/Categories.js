import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Categories = () => {
   const [data, setData] = useState ([])
    useEffect (() => {
        axios
            .get ('/api/genres')
            .then (res => {
                setData (res.data.data)
            })
    }, [])

    const renderligne = record => {
        return (
            <tr key = {record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td><button>+</button></td>
             </tr>
        )
    }

    if (data.length === 0) {
        return (
            <div className = 'container'>
                <h1>Categories</h1>
                <div className='alert alert-danger' role='alert'>
                    <h4 className='alert-heading'>Attention !</h4>
                    <p>Vous n'avez pas encore ajouté des catégories.</p>
                </div>
            </div>
        )
    }

    return (
        <div className = 'container'>
            <h1>Categories</h1>
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Nom</th>
                    <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map(renderligne)} 
                </tbody>
            </table>
        </div>
    )
}

export default Categories