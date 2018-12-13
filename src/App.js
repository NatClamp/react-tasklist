import React, { Component } from 'react';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import List from './components/List';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      { text: 'wake up', isComplete: false, category: 'wellness' },
      { text: 'go back to sleep', isComplete: true, category: 'wellness' },
      { text: 'count money', isComplete: false, category: 'finance' },
    ],
  };

  render() {
    console.log('rendering...');
    const tasks = this.state.tasks;
    return (
      <div className="App">
        <Header />
        <TaskAdder addTask={this.addTask} />
        <CategoryFilter filterTasks={this.filterTasks} />
        <List
          tasks={tasks}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
        />
      </div>
    );
  }

  completeTask = taskToComplete => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        if (task === taskToComplete) {
          if (task.isComplete === true) {
            const uncompleteTask = { ...task };
            uncompleteTask.isComplete = false;
            return uncompleteTask;
          } else {
            const completeTask = { ...task };
            completeTask.isComplete = true;
            return completeTask;
          }
        }
        return task;
      }),
    }));
  };

  deleteTask = taskToDelete => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => task !== taskToDelete),
    }));
  };

  addTask = (taskToAdd, category) => {
    this.setState(
      state => ({
        tasks: [
          ...state.tasks,
          { text: taskToAdd, isComplete: false, category: category },
        ],
      }),
      () => console.log(this.state.tasks),
    );
  };

  filterTasks = category => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => task.category === category),
    }));
  };
}

export default App;
