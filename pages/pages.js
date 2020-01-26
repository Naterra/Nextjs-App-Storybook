import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

/**  Components  **/
import Layout from '../components/layouts/Layout'
import RecordsListWithPaging from "../components/RecordsListWithPaging";
import RecordPreview from "../components/Sets/RecordPreview";

/**  Actions  **/
import {  getPageById  } from '../store/actions';




class PagesPage extends Component {
    static async getInitialProps (props){
        const { query, store, isServer, req, res } = props;
        const pageId = query.id || false;
        const pageData = pageId ? await store.dispatch(getPageById(pageId)) :false;

        return { pageData };
    };


    render() {
        const { pageData, router } = this.props;


        let meta={};
        if(pageData) {
            meta={ title: pageData.title,   description: pageData.description   };
        }else{
            meta={ title:"",  description:"" };
        }


        return (
            <Layout meta={meta}   frontPage={false} container={false} fixedContainer={true} {...this.props} >

                {pageData && (<div>
                    <h1>{pageData.title}</h1>
                    <div className="row description ckEditorContent" dangerouslySetInnerHTML={{ __html: pageData.description }} />
                </div>)}

                {/*{pageId && record && (<div>*/}
                    {/*<h1>{record.title}</h1>*/}
                    {/*<div className="row description ckEditorContent" dangerouslySetInnerHTML={{ __html: record.description }} />*/}

                {/*</div>)}*/}

                {/*<h1>Pages</h1>*/}

                {/*<div className='row'>*/}
                    {/*<RecordsListWithPaging*/}
                        {/*ElComponent={RecordPreview}*/}
                        {/*queryParam={{populateSetData:true, title:"Pictures"}}*/}
                        {/*getRecordsFn={this.props.getCollections}*/}
                        {/*asTable={true}*/}
                    {/*/>*/}
                {/*</div>*/}
            </Layout>
        )
    }
}


export default withRouter(PagesPage);