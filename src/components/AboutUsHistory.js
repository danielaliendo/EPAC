import React from 'react';
import "./../styles/AboutUsHistory.css";
import Gallery from "./Gallery";

const AboutUsHistory = () => {
    return (
        <div className="cnt flxBxClumn cntHistory">
            <div class="cnt-title">
                <h2 className="title">Sobre nosotros</h2>
                <div class="border" />
            </div>
            <div className="cnt-content">
                    <div>
                        <p>EPAC, una Asociación Civil sin
                        fines de lucro, conformada por profesionales relacionados a la energía eléctrica.
                        La Comisión Directiva está integrada por profesionales universitarios
                        docentes, técnicos docentes e instaladores electricistas categoría III. Todos trabajando en el nuevo
                        paradigma de la energía eléctrica de acuerdo a las nuevas leyes y bajo reglamentación de AEA y
                        normas IRAM.

                        EPAC cuenta con una trayectoria de ocho años dando charlas, cursos y
                        congresos de seguridad eléctrica, electricidad domiciliaria e industrial y energía renovable.
                        Articula con empresas y comercios del mercado eléctrico y ha realizado
                    publicaciones en la revista y programa ElectroInstalador de BS AS.</p>
                    </div>
                <div className="containerGalery">
                    <Gallery />
                </div>
            </div>

        </div>
    );
}

export default AboutUsHistory;