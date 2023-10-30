import React from 'react';

function Card() {
    return (
        <div className="d-flex justify-content-xl-around" style={{ margin: '2rem' }}>
            <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem'}}>
                <div class="card-header" style={{ fontSize: '1.5rem' } }>Card 01</div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-danger mb-3" style={{ maxWidth: '20rem'}}>
                <div class="card-header" style={{ fontSize: '1.5rem' }}>Card 02</div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-success mb-3" style={{ maxWidth: '20rem'}}>
                <div class="card-header" style={{ fontSize: '1.5rem' }}>Card 03</div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}


export default Card;