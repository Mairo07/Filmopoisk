import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hook/redux';

import { closeModal } from '../../shared/module/modal/modalSlice';
import Modal from '../../shared/ui/modal/Modal';
import { loginThunk } from './loginThunk';
import { Input } from '../../shared/ui/input/Input';
import { Button } from '../../shared/ui/button/Button';
import classes from './loginModal.module.css';

const formType = {
	login: 'login',
	password: 'password',
};

export const LoginModal = () => {
	console.log('asd');
	const isModalOpen = useAppSelector((state) => state.modal.isOpen);
	const token = useAppSelector((state) => state.auth.token);
	console.log('isModalOpen', isModalOpen);
	const dispatch = useAppDispatch();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	useEffect(() => {
		if (token) {
			dispatch(closeModal());
		}
	}, [token, dispatch]);

	const handleCloseModal = () => {
		dispatch(closeModal());
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Login:', login, 'Password:', password);
		const token = await dispatch(
			loginThunk({
				login,
				password,
			})
		);
		console.log('tokenModal', token);
	};

	return (
		<div className='App'>
			<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
				<form onSubmit={handleSubmit}>
					<h2 className={classes.modalTitle}>Авторизация</h2>
					<div className={classes.inputsWraper}>
						<Input
							name='login'
							id={formType.login}
							value={login}
							placeholder='Введите логин'
							required={true}
							onChange={(e) => setLogin(e.target.value)}
						>
							Логин
						</Input>
						<Input
							name='password'
							type='password'
							id={formType.password}
							value={password}
							placeholder='Введите пароль'
							required={true}
							onChange={(e) => setPassword(e.target.value)}
						>
							Пароль
						</Input>
					</div>
					<div className={classes.buttonsWraper}>
						<Button
							type='submit'
							onClick={() => {
								console.log('click');
							}}
						>
							Войти
						</Button>
						<Button type='submit' onClick={handleCloseModal} mode='outline'>
							Отменить
						</Button>
					</div>
				</form>
			</Modal>
		</div>
	);
};
