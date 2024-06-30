import { ReactElement } from 'react';
import classes from './header.module.css';
import { Button } from '../../shared/ui/button/Button';
import { useAppDispatch, useAppSelector } from '../../shared/hook/redux';
import { openModal } from '../../shared/module/modal/modalSlice';
import { logout } from '../../shared/module/auth/authSlice';
import Avatar from './Avatar';

export const Header = (): ReactElement => {
	const dispatch = useAppDispatch();
	const token = useAppSelector((state) => state.auth.token);
	console.log('token', token);
	const handleLogin = () => {
		dispatch(openModal());
	};
	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<header className={classes.header}>
			<a className={classes.headerLogo} href='/'>
				<span className={classes.headerLogoText}>Фильмопоиск</span>
			</a>
			{token && (
				<div className={classes.authBlock}>
					<Avatar className={classes.avatar} />
					<Button onClick={handleLogout} mode='outline'>
						Выйти
					</Button>
				</div>
			)}
			{!token && <Button onClick={handleLogin}>Войти</Button>}
		</header>
	);
};
