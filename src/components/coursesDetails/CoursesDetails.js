import React from 'react';
import { useLocation } from 'react-router-dom';
import "./../../styles/CoursesDetails.css";

// Components
import Aside from './aside/Aside';
import Slider from './Slider';
import ChipsInformation from './ChipsInformation';
import GeneralInformation from './GeneralInformation';

const CoursesDetails = () => {

    const { state } = useLocation()
    const { curso } = state;

    return (
        <div className="coursesDetails mrgnTp">
            <Slider curso={ curso } />
            <div className="box colorBox" />
            <ChipsInformation curso={ curso }/>
            <div className="body cntDetails">
                <GeneralInformation curso={ curso } />
                <Aside curso={ curso } />
            </div>
            <div className="coursesDetailsNon">
            </div>
        </div>
    );
}
export default CoursesDetails;
