import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    //on initialise l'état du composant. Il y a deux propriétés          
    //dans l'état, les tâches existantes qui est un tableau vide 
    //par défaut et les nouvelles taches saisies par l'utilisateur.
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  addTask = () => {
    //Cette ligne utilise une fonctionnalité de JavaScript appelée 
    //"destructuring assignment". Elle permet d'extraire des valeurs 
    //d'un objet et de les assigner à des variables en une seule instruction.
    //Ici on assigne donc l'etat actuel à ces deux variables. Dans ce cas, 
    //tasks va être égal à this.state.tasks et newTask va être égal à this.state.newTask.
    //C'est une syntaxe concise et couramment utilisée en React pour accéder aux 
    //propriétés de l'état sans avoir à utiliser this.state à chaque fois. 
    const { tasks, newTask } = this.state;
    if (newTask !== '') {
      //si on a une nouvelle tache on met à jour l'etat du composant avec set
      this.setState({
        //...tasks est un spread operator (vu en js natif, consultez votre cours si besoin).
        //Il crée une copie de tous les elements du tableau et il lui ajoute newTask à ce tableau. 
        tasks: [...tasks, newTask],
        newTask: '',
      });
    }
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  render() {
    const { tasks, newTask } = this.state;
    return (
      <div>
        <h1>ToDo List</h1>
        <input
          type="text"
          value={newTask}
          onChange={this.handleChange}
          placeholder="Nouvelle tâche"
        />
        <button onClick={this.addTask}>Ajouter</button>
        <ul>
          {/* Attention ici on est html la façon d'ecrire les commentaires différent.
          Donc ici nous avons tasks qui correspond au tableau actuel de l'etat du composant. 
          Il contient les taches actuelles. On parcours le tableau avec .map() avec en 
          premier parametre l'element qu'on va parcourir et en deuxieme son index dans le tableau.
          Et on créé donc un li avec pour key l'index de l'élèment et l'affiche */}
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;