import React from 'react';
import Users from './components/Users'
import Projects from './components/Projects'
function App() {
  return (
    <div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
        <h1 className="heading-title">Programmer Finder Application! </h1>
        <Users/>
        <Projects/>

        </div>
      </div>
      </div>
    </div>
  )
}
export default App
