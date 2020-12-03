import React from 'react';


import {
    Link
} from "react-router-dom";

import "../styles/contents.css";

const Contents = () => {
    return (
        <div className="contents-container">
            <h3>Novedades</h3>
            <ul className="ul-contents-container">
                <li>
                    <Link className="item-link" to="/cursos">
                        <img src="https://i.ibb.co/DwSpBtD/arrow-right.png"></img>
                        <p>Notas</p>
                    </Link>
                </li>
                <li>
                    <Link className="item-link" to="/cursos">
                        <img src="https://i.ibb.co/DwSpBtD/arrow-right.png"></img>
                        <p>Legislaciones y normas</p>
                    </Link>
                </li>
                <li>
                    <Link className="item-link" to="/cursos">
                        <img src="https://i.ibb.co/DwSpBtD/arrow-right.png"></img>
                        <p>Proyectos</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Contents;