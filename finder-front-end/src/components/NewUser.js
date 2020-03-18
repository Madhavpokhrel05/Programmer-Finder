import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      projects: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(event)=>this.props.handleAddUser(event,this.state)}>


          <div className="input-group mb-3">
            <input type="text"   placeholder="Enter Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2"><i className="fa fa-id-card"></i></span>
            </div>
          </div>

          <div className="input-group mb-3">
            <input type="text"   placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange} className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2"><i className="fa fa-lock"></i></span>
            </div>
          </div>

          <div className="input-group mb-3">
            <textarea  rows="10"  placeholder="Project Description"
            name="projects"
            value={this.state.projects}
            onChange={this.handleChange} className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" ></textarea>

          </div>


          <input type="submit" value="submit" className="btn btn-info text-uppercase" />
        </form>
      </div>
    )
  }

}

export default App
