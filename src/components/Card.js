function Card() {
    return (

        < div className='card' >
            <img width={133} height={112} src='/img/Sneakers/4.jpg' alt='Sneakers' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between aline-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>12 999 pуб.</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src='/img/plus.svg' alt='Plus' />
                </button>
            </div>
        </div >



    );
}

export default Card;



