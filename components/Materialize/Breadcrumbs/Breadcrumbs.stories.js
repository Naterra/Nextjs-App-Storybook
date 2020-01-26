import React from 'react';
import Breadcrumbs   from "./index";
// import  './styles.scss';

export default {
    title: 'Materialize',
    component: Breadcrumbs,
    // includeStories: /^LinkButton/,
    // parameters: { notes: { markdown: MarkdownText } }
};


const brkLinks = [
    { link: `/category`, title: `Category` },
    { link: `/category/type`, title: `Type` }
];

export const _Breadcrumbs = () => (
    <Breadcrumbs  data={brkLinks}  ></Breadcrumbs>
);