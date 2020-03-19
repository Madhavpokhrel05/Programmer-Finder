import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name: '',
      description: '',
      url: ''
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
        <form onSubmit={(event)=>this.props.handleAddProject(event,this.state)}>
          <div className="input-group mb-3">
            <input type="text"   placeholder="Enter Project Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange} className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2"><i className="fa fa-object-ungroup"></i></span>
          </div>
        </div>

          <div className="input-group mb-3">
            <input type="text"
              placeholder="Enter Project URL"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
              className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2"><i className="fa fa-link"></i></span>
            </div>
          </div>

          <div className="input-group mb-3">
            <textarea  rows="10"
              placeholder="Enter Project Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" ></textarea>
          </div>

          <input type="submit" value="submit" className="btn btn-info text-uppercase" />
        </form>
      </div>
    )
  }

}

export default App
