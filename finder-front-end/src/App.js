import React from 'react';
import Projects from './components/Projects'

let baseURL
if (process.env.NODE_ENV === 'projects') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'http://localhost:3003'
}

class App extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
         programs: []
       }
       this.getPrograms = this.getPrograms.bind(this)
       this.getProgram = this.getProgram.bind(this)
     }

     componentDidMount(){
       this.getPrograms()
   }

     async getPrograms (){
       try {
         let response = await fetch(`${baseURL}/programs`)
         let data = await response.json()
         this.setState({program: data})
       }catch(e){
         console.error(e)
       }
     }
     getProgram(program) {
         this.setState({program: program})
     }


  render () {
    return (
        <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
            <h1 className="heading-title">Program Manager!</h1>
            <div>
            {this.state.program.name}
            </div>
            <a>New Project</a>
            <Projects/>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default App
