import React from 'react';

const Cars = ({color, vehicule, year, age, model}) => {

    const colorInfo = color ? <p><i><u className='souligner'>Couleur:</u></i> {color}</p> : <p>Couleur: "Néant"</p>;

    if (vehicule) {
        return (
            <div className="cars">
                <p><i><u className='souligner'>Véhicule:</u></i> { vehicule }</p>
                <p><i><u className='souligner'>Model:</u></i> { model }</p>
                <p><i><u className='souligner'>Année:</u></i> { year }</p>
                <p><i><u className='souligner'>Âge:</u></i> { age }</p>
                {colorInfo}
            </div>
        )
    }
    else{
        return null;
    };
};

export default Cars
