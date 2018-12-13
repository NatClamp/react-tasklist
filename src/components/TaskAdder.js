import React from 'react';

class TaskAdder extends React.Component {
  state = {
    newTask: '',
  };

  render() {
    const { newTask } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="add-task">Add a task: </label>
        <input
          value={newTask}
          id="add-task"
          type="text"
          onChange={this.handleChange}
          required
        />
        <label htmlFor="addCategory">Add a category</label>
        <select id="addCategory" required>
          <option value="work">Work</option>
          <option value="wellness">Wellness</option>
          <option value="finance">Finance</option>
        </select>
        <button>Add Me!</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state.newTask, event.target.addCategory.value);
    this.setState({
      newTask: '',
    });
  };
}

export default TaskAdder;
