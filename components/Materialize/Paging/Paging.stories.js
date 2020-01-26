import React from 'react';
import Paging   from "./Paging.js";


export default {
    title: 'Materialize',
    component: Paging,
};



export const PagingComponent = () => (
    <Paging total={200} recordsPerPage={10} pageNo={1}></Paging>
);