// import React from "react";

// const Toto = props => {

//     // console.log(props);

//     const btnReponseToto = props.leState.messageMaman !== null ? (<button onClick={props.reponseToto}>Réponse</button>) : (<button disabled>Réponse</button>);

//     return(
//         <div>
//             <h2>{props.name}</h2>
//             {btnReponseToto}
//             <p>{props.leState.messageToto}</p>
//         </div>
//     )
// }

// export default Toto;

const Toto = props => {

    return (
      <div>
          <h2>{props.name}</h2>
          <button 
              disabled={props.leState.disabled}
              onClick={()=> props.reponseTotoProps("D'acccord, je m'en occupe !")}
          >Réponse</button>
  
          <p>{props.leState.messageToto}</p>
      </div>
    )
  }
  
  export default Toto