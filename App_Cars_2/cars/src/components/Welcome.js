import React from 'react';

const Welcome= () => {

    const Bonjour = () => console.log('Bonjour !');
    const Bonsoir = arg => console.log(arg);  
    
    return(
        
        <div>
            {/* Invoquer une fonction "Bonjour !" qui affichera console.log("Bonjour !"); */}
            <button onClick={Bonjour}> Invoquer une fonction </button>

            {/* Invoquer une fonction "Bonsoir !" avec un argument "Bonsoir !" et de l'affciher dans un console.log(); */}
            <button onClick={() => Bonsoir("Bonsoir ! 2")}> Invoquer une fonction avec arg "Bonsoir" </button>

            {/* Lancer le console.log("Bonne nuit !") après le click sans invoquer de fonction */}
            <button  onClick={()=> console.log('Bonne nuit !')}> Clg sur le bouton </button>
        </div>
    )
}

export default Welcome