import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../styles/container-cards.css"

const ContainerCards = () => {
    return (
        <>
            <div className="card-container">
                <Link className="card-item" to="/cursos">
                    <img src="https://i.ibb.co/wWDTJWw/card-cursos.jpg" />
                    <div className="card-transparent">
                        <p>Cursos</p>
                    </div>
                </Link>
                <Link className="card-item" to="/conferencias">
                    <img src="https://i.ibb.co/R0PnDZ4/card-conferencias.png" />
                    <div className="card-transparent">
                        <p>Conferencias y eventos</p>
                    </div>
                </Link>
                <Link className="card-item" to="/Biblioteca">
                    <img src="https://i.ibb.co/hfH0GBj/card-charlas.jpg" />
                    <div className="card-transparent">
                        <p>Biblioteca</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ContainerCards;