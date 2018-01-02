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
                <h1>Las Fotos</h1>
            </div>
        )
    }
}

export default Galeria;