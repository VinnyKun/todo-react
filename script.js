class List extends React.Component {
  constructor(props){
    super(props)

    // This binding is necessary to make `this` work in the callback
    this.changeHandler = this.changeHandler.bind( this );
    this.addToDo = this.addToDo.bind( this );
    this.deleteToDoSplice = this.deleteToDoSplice.bind( this );
    this.deleteToDoFilter = this.deleteToDoFilter.bind( this );
  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){

    //gets input from the form and sets the state of this.state.word to whatever is entered
    this.setState({word:event.target.value})
  }

  addToDo() {
    //pushes this.state.word to the list array
    this.state.list.push(this.state.word);

    //this clears up state.word to an empty string. Can move forward without this line
    this.state.word = "";
    
    //sets state of list and word as per the last two lines
    this.setState(this.state);
    console.log(this.state)
  }

  deleteToDoSplice(event) {
 
    let array = this.state.list 
    console.log(event.target.value);
    
    //capture the array index of item to be deleted
    let index = array.indexOf(event.target.value)
    
    //starts deleteting at index, delete count:1
    array.splice(index, 1);
    
    //set the spliced array as the new state of to-do list
    this.setState({list: array});

  }

  deleteToDoFilter(event) {
    var array = this.state.list
    console.log(array);
    console.log(event.target.value);
    var newArray= array.filter( function (toDos) {
      
      return toDos !== event.target.value
      
    })
    
    this.setState({list: newArray});

  }

  render() {
      let toDos = this.state.list.map( (toDo, index) => (
        <li key={index}>
          {toDo}<br/>
          <button onClick={this.deleteToDoSplice}>splice all over me</button>
          <button onClick={this.deleteToDoFilter}>filter through me</button>
        </li>
      ))

      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.addToDo}>add To-Do</button>

          <ol>
            {toDos}
          </ol>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);