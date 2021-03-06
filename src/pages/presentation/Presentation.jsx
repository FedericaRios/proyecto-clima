import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css';

const Presentation = () => {
    let navigate = useNavigate()
    const redireccionHome = () => {
        navigate("/home");
    }

    return (
        <div className="presentation">
            <h2>¡Conocé el pronóstico!</h2>
            <div>
                <button
                    className="button"
                    onClick={redireccionHome}>Consultar</button>
            </div>
        </div>

    )
};

export default Presentation;