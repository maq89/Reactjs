import React, { Component } from 'react';
import uuid from 'uuid';

import './App.css';

import Projects from './../projects_component/Projects';
import AddProject from './../add_project_component/AddProject';

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			projects : []
		}
	}
	
	componentWillMount(){
		this.setState({
			projects : [
				{
					id: uuid.v4(),
					title : 'Project 1',
					category : 'Category 1',
					editing: false
				},
				{
					id: uuid.v4(),
					title : 'Project 2',
					category : 'Category 2',
					editing: false
				},
				{
					id: uuid.v4(),
					title : 'Project 3',
					category : 'Category 3',
					editing: false
				}
			],
			categories: ['Category 1', 'Category 2', 'Category 3']
		})
	}
	
	handleAddProject(project){
		let projects = this.state.projects;
		projects.push(project);
		this.setState({projects: projects});
	}
	
	handleDeleteProject(id){
		let projects = this.state.projects;
		let index = projects.findIndex(x => x.id === id);
		projects.splice(index, 1);
		this.setState({projects: projects});
	}
	
	handleEditProject(id){
		let projects = this.state.projects;
		let index = projects.findIndex(x => x.id === id);
		projects[index].editing = true;
		this.setState({projects: projects});
		
	}
	
	handleUpdateProject(project){
		let projects = this.state.projects;
		let index = projects.findIndex(x => x.id === project.id);
		projects[index].title = project.title;
		projects[index].category = project.category;
		projects[index].editing = false;
		this.setState({projects: projects});
	}
	
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
		<Projects 
		categories={this.state.categories} 
		projects={this.state.projects} 
		onEdit={this.handleEditProject.bind(this)} 
		onUpdate={this.handleUpdateProject.bind(this)}
		onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}



export default App;
