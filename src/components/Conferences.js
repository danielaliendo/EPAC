import React from 'react';
import { conferences } from "./dbConferences";
import "./../styles/ConferencesCards.css";

const ConferencesCards = () => {
    return (
        <div
            className="cnt flxBxClumn containerConferencesCards">
            <div className="flxBxCntr">
                <div class="cnt-title">
                    <h2 className="title">Conferencias</h2>
                    <div class="border">
                    </div>
                </div>

            </div>
            <div className="cnt-content allConferences">
                {
                    conferences.map((conference, key) =>
                        <div
                            className="conference"
                            key={key}
                        >
                            <p className="conference-date">
                                {conference.startDate.month} / {conference.startDate.year}
                            </p>
                            <h4 className="conference-title">"{conference.title}"</h4>
                        </div>
                    )

                }
            </div>
        </div>
    );
}

export default ConferencesCards;