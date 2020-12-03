import React from 'react';
import './../styles/OrganizationChart.css';
import { commission } from './dbCommission';

export default function OrganizationChart() {


    return (
        <>
            <div className="secondary">
                <div className="cardOC">
                    <div className="titleOC">
                        <p>Presidente</p>
                    </div>
                    <div className="contentOC">
                        <p>
                            {commission.presidente.nombreCompleto} <br />
                            DNI: {commission.presidente.nroDNI} <br />
                            Vigencia: {commission.presidente.vigencia.desde} al {commission.presidente.vigencia.hasta}
                        </p>
                    </div>
                    <div className="avatarOC">

                    </div>
                </div>
                <div className="cardOC">
                    <div className="titleOC">
                        <p>Vicepresidente</p>
                    </div>
                    <div className="contentOC">
                        <p>
                            {commission.vicePresidente.nombreCompleto} <br />
                            DNI: {commission.vicePresidente.nroDNI} <br />
                            Vigencia: {commission.vicePresidente.vigencia.desde} al {commission.vicePresidente.vigencia.hasta}
                        </p>
                    </div>
                    <div className="avatarOC" />
                </div>
            </div>
            <div className="separator">
                <div className="line">
                    <div className="littlePoint pointLeft" />
                    <div className="point pointCenter" />
                    <div className="littlePoint pointRight" />
                </div>
            </div>

            <div className="secondary">
                {commission.vocales.titulares.map((vocalTitular, key) =>
                    <div className="cardOC" key={key}>
                        <div className="titleOC">
                            <p>Vocal titular</p>
                        </div>
                        <div className="contentOC">
                            <p>
                                {vocalTitular.nombreCompleto} <br />
                                DNI: {vocalTitular.nroDNI} <br />
                                Vigencia: {vocalTitular.vigencia.desde} al {vocalTitular.vigencia.hasta}
                            </p>
                        </div>
                        <div className="avatarOC">

                        </div>
                    </div>
                )}
            </div>
            <div className="separator">
                <div className="line">
                    <div className="littlePoint pointLeft" />
                    <div className="point pointCenter" />
                    <div className="littlePoint pointRight" />
                </div>
            </div>
            <div className="secondary">
                {commission.vocales.suplentes.map((vocalSuplente, key) =>
                    <div className="cardOC" key={key}>
                        <div className="titleOC">
                            <p>Vocal suplente</p>
                        </div>
                        <div className="contentOC">
                            <p>
                                {vocalSuplente.nombreCompleto} <br />
                                DNI: {vocalSuplente.nroDNI} <br />
                                Vigencia: {vocalSuplente.vigencia.desde} al {vocalSuplente.vigencia.hasta}
                            </p>
                        </div>
                        <div className="avatarOC">

                        </div>
                    </div>
                )}
            </div>
            <div className="separator">
                <div className="line">
                    <div className="littlePoint pointLeft" />
                    <div className="point pointCenter" />
                    <div className="littlePoint pointRight" />
                </div>
            </div>
            <div className="secondary">
                <div className="cardOC" >
                    <div className="titleOC">
                        <p>Revisor de cuentas titular</p>
                    </div>
                    <div className="contentOC">
                        <p>
                            {commission.revisorDeCuentas.titular.nombreCompleto} <br />
                                DNI: {commission.revisorDeCuentas.titular.nroDNI} <br />
                                Vigencia: {commission.revisorDeCuentas.titular.vigencia.desde} al {commission.revisorDeCuentas.titular.vigencia.hasta}
                        </p>
                    </div>
                    <div className="avatarOC">

                    </div>
                </div>
                <div className="cardOC" >
                    <div className="titleOC">
                        <p>Revisor de cuentas suplente</p>
                    </div>
                    <div className="contentOC">
                        <p>
                            {commission.revisorDeCuentas.suplente.nombreCompleto} <br />
                                DNI: {commission.revisorDeCuentas.suplente.nroDNI} <br />
                                Vigencia: {commission.revisorDeCuentas.suplente.vigencia.desde} al {commission.revisorDeCuentas.suplente.vigencia.hasta}
                        </p>
                    </div>
                    <div className="avatarOC">

                    </div>
                </div>
            </div>

        </>

    );
}