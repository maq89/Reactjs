import React, { Component } from 'react';

class ProjectItem extends Component {	
	
	deleteProject(id){
		this.props.onDeleteProject(id);
	}
	
	editProject(id){
		this.props.onEditProject(id);
	}
	
	changeCategory(event){
		console.log(event.target.value);
	}
	
	handleUpdate(e){
		if(this.refs.title.value === ''){
			alert('Title is Required.');
		}
		else{
			let project = {id: this.refs.id.value, title: this.refs.title.value, category: this.refs.category.value};
			this.props.onUpdateProject(project);
		}
		e.preventDefault();
	}

  render() {
	if(this.props.project.editing == true){
		let categoryOptions = this.props.categories.map(category => {
			return (
				<option key={category} value={category}>{category}</option>
			)
		});
		return (
		  <li className="ProjectItem">
			<form onSubmit={this.handleUpdate.bind(this)}>
				<input type="text" ref="title" defaultValue={this.props.project.title} /> - 
				<select 
					onChange={this.changeCategory.bind(this)} 
					ref="category" 
					defaultValue={this.props.project.category}> 
					{categoryOptions} 
				</select>
				<input type="hidden" ref="id" defaultValue={this.props.project.id} />
				<input type="submit" value="Update" />
				<button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
			</form>
		  </li>
		);	
	}  
	else{
		return (
		  <li className="ProjectItem">
			{this.props.project.title} - {this.props.project.category}
			<button onClick={this.editProject.bind(this, this.props.project.id)}>Edit</button>
			<button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
		  </li>
		);	
	}
  }
}

export default ProjectItem;
