import React, { Component }  from 'react';
import { withRouter } from 'next/router';
import { connect } from "react-redux";
import Link from 'next/link';
import Router from 'next/router';

 /** Components **/
import ProfileLayout from '../../components/layouts/ProfileLayout';
import PrivatePage from '../../components/PrivatePage';
import PageForm from '../../components/Forms/PageForm';
import RecordsListWithPaging from '../../components/RecordsListWithPaging';
import Tabs from '../../components/Materialize/Tabs/Tabs';
import CollectionsView from '../../components/admin/Collections/CollectionsView';

/** Actions **/
import { getPages  } from '../../store/actions';


class PagesPage extends PrivatePage{
    constructor(props){
        super(props);
        this.state={
            modalStatus:false
        }
    }

  render() {
      const { router } = this.props;
      const setId=router.query['edit'] || false;


    return (
      <ProfileLayout {...this.props} >

          {/* Pages List / Main View */}
          {!router.query["action"] && !router.query["edit"] &&(<div>
              <h3>Pages</h3>
              <CreateSetBtn />
              <RecordsListWithPaging
                  ElComponent={ItemsListView}
                  queryParam={{}}
                  getRecordsFn={this.props.getPages}
                  asTable={true}
                  tableHeader={['Title','Actions']}
              />
          </div>)}



          {/* Create Set Subpage */}
          {router.query["action"]=='new' && (<div>
              <GoBackBtn />
              <h3>Create Page</h3>
              <PageForm mode="new"/>
          </div>)}

          {/* Edit Set Subpage */}
          {router.query["edit"] && (<div>
              <GoBackBtn />
              <h3>Edit Page</h3>
                  <PageForm mode="edit" {...this.props}/>
          </div>)}
      </ProfileLayout>
    )
  }
}





const ItemsListView =(props)=>{
    const { data } = props;
    return(<tr onClick={e=> Router.push(`/admin/pages?edit=${data._id}`)}>
            <td>{data.title}</td>
            <td style={{width:'20px'}}>
                <Link href={`/admin/pages?edit=${data._id}`}>
                    <a><i title="Edit" className="material-icons tiny">create</i></a>
                </Link>
            </td>
        </tr>);
};



const GoBackBtn =()=>{
    return(<div onClick={() => Router.back()} style={{color: '#929292'}}>{'<< Go Back'}</div>);
};

const CreateSetBtn =()=>{
        return(<div className='col s12' style={{marginBottom: '20px'}}>
                <Link href="/admin/pages?action=new">
                    <a className="waves-effect waves-light btn">Create New Page</a>
                </Link>
            </div>);
};


export default connect(null, {getPages})(withRouter(PagesPage));
