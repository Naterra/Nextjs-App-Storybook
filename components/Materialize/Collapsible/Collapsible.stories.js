import React from 'react';
import Collapsible   from "./Collapsible";


export default {
    title: 'Materialize',
    component: Collapsible,
};



export const _Collapsible  = () => (
    <Collapsible>
        <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
            <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
    </Collapsible>
);