import api from '../../services/api'

export function MedalsBox(){
    
    const data = api.get('/medalists');
    
    return(
        <h1>hi</h1>
    )
}