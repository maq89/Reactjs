import React, { Component } from 'react';

import ProjectItem from './../project_item_component/ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {	
	
	deleteProject(id){
		this.props.onDelete(id);
	}
	
	editProject(id){
		this.props.onEdit(id);
	}
	
	updateProject(project){
		this.props.onUpdate(project);
	}
	
	
	render() {
		let projectItems;
		if(this.props.projects){
			projectItems = this.props.projects.map(project => {
				return (
					<ProjectItem 
					onEditProject={this.editProject.bind(this)} 
					onUpdateProject={this.updateProject.bind(this)} 
					onDeleteProject={this.deleteProject.bind(this)} 
					categories={this.props.categories} 
					key={project.title} project={project} />
				);
			});
		}
		return (
		  <div className="Projects">
			<ul>
				{projectItems}
			</ul>
		  </div>
		);
	}
}

// Type Checking of Prop
Projects.propTypes = {
	projects: PropTypes.array.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
}


export default Projects;
