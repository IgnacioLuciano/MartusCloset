import React from 'react';
import Header from '../components/Header';

class Galeria extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header title="Galeria" />
                <div className="fotos">
                    <h1>Las Fotos</h1>
                    <img src={require('hair1.jpg')} />
                    <button>It works!</button>
                   
                   

                </div>
            </div >
        )
    }
}

export default Galeria;