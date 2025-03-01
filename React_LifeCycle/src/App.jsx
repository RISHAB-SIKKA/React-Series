// import React, { Component } from 'react';

// class MyComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: null,
//     };
//   }

//   componentDidMount() {
//     console.log("Mounted");
//     // This is where you can perform initial setup.

//     // In this example, we simulate fetching data from an API after the             component has mounted.
//     // We use a setTimeout to mimic an asynchronous operation.
//     setTimeout(() => {
//       const fetchedData = 'This data was fetched after mounting.';
//       this.setState({ data: fetchedData });
//     }, 2000); // Simulate a 2-second delay
//   }

//   render() {
    
//     console.log("Mounted in return") ;    
//     return (
//       <div>   
//         {this.state.data ? (
//           <p>Data: {this.state.data}</p>
//         ) : (
//           <p>Loading data...</p>
//         )}
//       </div>
//     );
//   }
// }

// export default MyComponent;



import React, { Component } from 'react'
import Counter from './components/Counter';

export default class App extends Component {

  constructor(){
    super();
    this.state= {
      count:0,
      seconds:0
    },
    this.timer = null;
  }

  componentDidMount(){
    console.log("ComponentDid Mount: When component render's first time")
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
      console.log(this.state.seconds);
    }, 1000); // Update every 1 second (1000 milliseconds)
  }

  // States are mutable
  // props are im mutable

  Increment(){
    this.setState({count: this.state.count + 1})
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      //
      //  Browser doesn't understand the JSX, so we use transpiler like babel to convert jsx to html
      <>

      <Counter number={this.state.count}></Counter>

        {/* // "this" will not work because it is not getting the value of this : we can use either bind or fat arrow function */}
        {/* <button onClick={this.Increment}>Click me</button> */}


        {/* //using bind */}
        {/* <button onClick={this.Increment.bind(this)}>Click  Me</button> */}

        {/* using fat arrow function*/}
        <button onClick={() => this.Increment()}>Click me</button>
      </>
    )
  }
}
