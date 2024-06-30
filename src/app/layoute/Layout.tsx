import { ReactElement } from 'react';
import { Header } from '../../widget/header/Header';
import classes from './layout.module.css';
import { Outlet } from 'react-router-dom';
import { LoginModal } from '../../feature/modal/LoginModal';

export const Layout = (): ReactElement => {
	return (
		<div className={classes.layout}>
			<Header></Header>
			<main className={classes.content}>
				<Outlet />
			</main>
			<LoginModal />
		</div>
	);
};
