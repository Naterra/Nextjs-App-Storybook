import React from 'react';
import Modal, { ModalTrigger } from './Modal';

export default {
	title: 'Materialize',
	component: Modal
};

export const _Modal = () => <Modal action_component={<a className="btn">Open Modal</a>}>hello</Modal>;
