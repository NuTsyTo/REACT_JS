// On importe React sur notre document
import React from 'react';

// On créé une class qui va hérité de React pour devenir un composant
class Header extends React.Component {
    // on utilise la fonction render() du React pour préciser
    // ce que ce composant va devoir "rendre" et retourner comme contenu
    render(){
        return(
            //On rentre directement notre code HTML dans la page JS
            <header>
                <h1>Mon En-Tête</h1>
            </header>
        );
    }
}
// On export notre class pour qu'elle puisse être récupéré par la suite
export default Header;