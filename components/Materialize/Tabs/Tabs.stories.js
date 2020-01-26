import React from 'react';
import Tabs   from "./Tabs";


export default {
    title: 'Materialize',
    component: Tabs,
};


export const _Tabs = () => (
    <Tabs id={'exampleId'} menuList={['First', 'Second', 'Third']} />
);