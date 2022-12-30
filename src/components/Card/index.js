import styles from './Card.module.scss';




function Card(props) {
    return (
        <div className={'styles.card'}>
            <div className={'styles.favorite'}>
                <img src="img/heart-unlike.svg" alt='Unlike' />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt='Sneakers' />
            <h5>{props.title}</h5>
            <div className='d-flex justify-between aline-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className='button' onClick={props.onClick}>
                    <img width={11} height={11} src='/img/plus.svg' alt='Plus' />
                </button>
            </div>
        </div >
    );
}

export default Card;



