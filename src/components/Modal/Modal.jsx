import {  useEffect } from "react";
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ imgLarge, closeModal}) =>{
    const handleOverlayClick = (event) => {
        if (event.currenntTarget === event.target) {
            this.props.closeModal();
        }
    };
    useEffect(() => {
        const handleEsc = ({ code }) => {
            if (code === 'Escape') onclose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc)
        };
    }, [closeModal]);

    return (
        <div className={css.Overlay} onClick={handleOverlayClick}>
            <div className={css.Modal}>
                <img src={imgLarge} alt="some-pic" />
            </div>
        </div>
    )
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
     imgLarge: PropTypes.objectOf(PropTypes.string),
}