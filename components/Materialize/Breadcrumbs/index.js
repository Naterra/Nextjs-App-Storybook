import  './styles.css';
import React from 'react';
import Link from 'next/link';



/**
 *
 * @param links = [{link, title}, ..., ...]
 * @returns {*}
 */
export default (props)=>{
    const { data } = props;

    return(<div className="breadcrumbs">
        <Link href='/' ><a className="homeLink"><i className="material-icons">home</i></a></Link>
        { data &&  data.map((el, i)=> (<Link key={i}  href={el.link} ><a className="breadcrumb ">
                 {el.title}
            </a>
        </Link>))}
    </div>);
}