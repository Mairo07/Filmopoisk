import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './modal.module.css';
import CloseIcon from './CloseIcon';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const portalElement = document.getElementById('modal-root');

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		// TODO может переделать.
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	if (!portalElement) {
		return;
	}

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return ReactDOM.createPortal(
		<div
			onClick={handleOverlayClick}
			className={classes.modalOverlay}
			aria-hidden='true'
		>
			<div className={classes.modalContent}>
				<button className={classes.modalClose} onClick={onClose}>
					<CloseIcon className={classes.modalCloseIcon} />
				</button>
				{children}
			</div>
		</div>,
		portalElement
	);
};

export default Modal;
