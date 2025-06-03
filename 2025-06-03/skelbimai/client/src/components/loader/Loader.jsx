import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import style from './Loader.module.css';

export default () => {
    const { context } = useContext(MainContext);
    
    return context.loading && (
        <div className={style.loader}></div>
    );
}