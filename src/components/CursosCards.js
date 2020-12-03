import React from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";
import "./../styles/CursosCards.css";
import { courses } from "./Courses";
import { ErrorOutline } from "@material-ui/icons";
import SliderCoursesCards from './SliderCoursesCards';

const CursosCards = () => {
    const history = useHistory()

    const historyPush = (id, curso) => {
        history.push(`/cursos/${id}`, { curso: curso })
    }

    return (
        <>
            <SliderCoursesCards />
        </>
    );
}

export default CursosCards;