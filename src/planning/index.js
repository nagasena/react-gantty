import React from 'react';

import './style.scss';
import date_utils, { month_names } from '../gantt/utils/date';

// jan -> june
const months = month_names.fr.splice(0, 6);

// july -> dec
const seconds = month_names.fr.splice(-6);

const Planning = () => {
    console.log(months);
    return (
        <div className="wrapper">
            {months.map((m) => (
                <div key={m} className="box">
                    {m}
                </div>
            ))}
            <div>
                {months.map((m) => (
                    <div key={m} className="box-task"></div>
                ))}
            </div>

            {months.map((m) => (
                <div key={m} className="box-task"></div>
            ))}
            {months.map((m) => (
                <div key={m} className="box-task"></div>
            ))}
        </div>
    );
};

export default Planning;
