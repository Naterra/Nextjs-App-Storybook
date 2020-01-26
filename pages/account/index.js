import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/** Components **/
import PrivatePage from '../../components/PrivatePage';
import ProfileLayout from '../../components/layouts/ProfileLayout';

/** Actions **/
import { getUserData } from '../../store/actions';



class AccountPage extends PrivatePage {
	render() {
		const {} = this.props;
		return (<ProfileLayout container={true} {...this.props}>
				Hello
		</ProfileLayout>
		);
	}
}





AccountPage = connect(null, {  getUserData })(AccountPage);
export default  AccountPage ;
