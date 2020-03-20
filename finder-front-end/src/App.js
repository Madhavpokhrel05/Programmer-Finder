import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Projects from './components/Projects'
import New from './components/NewProject.js'

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
         projects: []
       }
       this.getPrograms = this.getPrograms.bind(this)
       this.getProgram = this.getProgram.bind(this)
     }

     componentDidMount(){
       this.getPrograms()
   }

     async getPrograms (){
       try {
         let response = await fetch(`${baseURL}/projects`)
         let data = await response.json()
         this.setState({projects: data})
       }catch(e){
         console.error(e)
       }
     }
     getProgram(project) {
         this.setState({project: project})
     }


  render () {
    return (
        <Router>
        <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
            <h1 className="heading-title">Project Manager!</h1>
            <div>
            {this.state.projects.name}
            </div>
             <Route path='/new' exact component={Projects} />
            </div>
          </div>
          </div>
        </div>
         </Router>
    )
  }
}

export default App
