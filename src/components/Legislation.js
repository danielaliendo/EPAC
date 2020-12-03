import React from 'react';
import {
    Link,
} from "react-router-dom";
import "./../styles/Legislation.css"

const Legislation = () => {
    return (
        <div className="cnt flxBxClumn ">
            <div className="flxBxCntr cnt-content">
                <div class="cnt-title">
                    <h3 className="title">
                        Legislación y reglamentaciones
                    </h3>
                    <div class="border">
                    </div>
                </div>
            </div>
            <div className="cnt-content">
                <div class="cnt-subtitle">
                    <h3 className="title">Leyes de Córdoba</h3>
                    <div class="border">
                    </div>
                </div>
                <ul className="legList">
                    <li>Ley 10.281  de Seguridad Electrica  2015</li>
                    <li>Decreto reglamentario 1022 - 2015</li>
                    <li>10604 Adhesión provincial a la Ley Nacional 27424 de energías renovables</li>
                    <li>10572 Declaración de interés provincial el uso racional y eficiente de la energía</li>
                </ul>
                <div class="cnt-subtitle">
                    <h3 className="title">Reglamentaciones</h3>
                    <div class="border">
                    </div>
                </div>
                <ul className="legList">
                    <a href="https://aea.org.ar/producto/guia-aea-770/" target="_blank">
                        <li>GUÍA AEA 770 – Instalaciones eléctricas en viviendas unifamiliares hasta 10 kW. Edición 2018</li>
                    </a>
                    <a href="https://aea.org.ar/producto/viviendas-unifamiliares-hasta-63a-clasificaciones-ba2-y-bd1/" target="_blank">
                        <li>AEA 90364-7-770 Viviendas unifamiliares (hasta 63A – clasificaciones BA2 y BD1). Edición 2017</li>
                    </a>
                    <a href="https://aea.org.ar/producto/reglamentacion-para-la-ejecucion-de-instalaciones-electricas-en-inmuebles-viviendas-oficinas-y-locales-unitarios-2006/" target="_blank">
                        <li>AEA 90364-7-771 Reglamentación para la ejecución de instalaciones eléctricas en inmuebles – Viviendas, oficinas y locales (unitarios). Edición 2006</li>
                    </a>
                    <a href="https://aea.org.ar/producto/banos-lugares-y-locales-conteniendo-baneras-duchas-u-otros-artefactos-con-griferia-emisora-de-agua-2012/" target="_blank">
                        <li>AEA 90364-7-701 Baños, lugares y locales conteniendo bañeras, duchas u otros artefactos con grifería emisora de agua. Edición 2012</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}
export default Legislation;