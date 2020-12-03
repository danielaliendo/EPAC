import React from 'react';
import OrganizationChart from './OrganizationChart';
import "./../styles/AboutUsCommission.css";

const AboutUsCommision = () => {
    return (
        <div className="cnt flxBxClumn">
            <div class="cnt-title">
                <h2 className="title">Comisión directiva</h2>
                <div class="border">
                </div>
            </div>
            <OrganizationChart />
        </div>
    );
}

export default AboutUsCommision;