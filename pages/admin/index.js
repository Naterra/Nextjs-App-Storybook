import React  from 'react';


 /** Components **/
import ProfileLayout from '../../components/layouts/ProfileLayout';
import PrivatePage from '../../components/PrivatePage';


class MainAdmin extends PrivatePage{

  render() {
      const {session} = this.props;


    return (
      <ProfileLayout {...this.props} >
            <h3> Welcome!</h3>
      </ProfileLayout>
    )
  }
}



export default MainAdmin;
