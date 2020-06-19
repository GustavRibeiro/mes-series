import React, { useState } from 'react'

const NouvelleCategorie = () => {

    const [name, setName] = useState ('')
    const onChange = evt => {
        console.log (evt)
    }

    return (
        <div className = 'container'>
            <h1>Nouvelle Categorie</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nom de la Categorie</label>
                    <input type = 'text' value = {name} onChange = {onChange} className = 'form-control' id = 'name' placeholder = 'Nom de la Categorie'/>
                </div>
                <button type='button' className='btn btn-primary'>Enregistrer</button>
            </form>
        </div>
    )
}

export default NouvelleCategorie