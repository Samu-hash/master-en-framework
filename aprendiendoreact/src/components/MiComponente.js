import React, {Component} from  'react';


class MiComponente extends Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes:[
                'tomate', 'queso', 'jamon cocido'
            ],
            calorias: 400
        }
        return(
            <React.Fragment>
                <div className="mi-componente">
                    <hr/>
                    <ol>
                        {
                            receta.ingredientes.map((ingrediente, i)=>{
                                console.log(ingrediente);
                                return <li key={i}>{ingrediente}</li>
                            })
                        }
                    </ol>
                </div>
            </React.Fragment>
        );
    }
}

export default MiComponente;