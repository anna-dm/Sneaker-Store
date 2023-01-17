import React from 'react';
import styles from './Card.module.scss';




function Card({ onFavorite, title, imageUrl, price, onPlus }) {
    const [isAdd, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdd);
    };

    React.useEffect(() => {
        console.log('Переменная изменилась');

    }, [isAdd]);

    return (
        <div className={'styles.card'}>
            <div className={'styles.favorite'} onClick={onFavorite}>
                <img src="img/heart-unlike.svg" alt='Unlike' />
            </div>
            <img width={133} height={112} src={imageUrl} alt='Sneakers' />
            <h5>{title}</h5>
            <div className='d-flex justify-between aline-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdd ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt='Plus' />
            </div>
        </div >
    );
}

export default Card;



