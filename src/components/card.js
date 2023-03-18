import React from 'react'

const card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Hello, {props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.carttittle}</h6>
                    <p className="card-text">{props.cardpreg}</p>                    
                </div>
            </div>
        </div>
    )
}

export default card
