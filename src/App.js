import React, { Component } from 'react';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import List from './components/List';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      { text: 'wake up', isComplete: true, category: 'wellness' },
      { text: 'go back to sleep', isComplete: false, category: 'wellness' },
      {
        text: 'count that big pile of money',
        isComplete: false,
        category: 'finance',
      },
    ],
    currentFilter: 'all',
  };

  render() {
    console.log('rendering...');

    const tasks =
      this.state.currentFilter === 'all'
        ? this.state.tasks
        : this.state.tasks.filter(
            task => task.category === this.state.currentFilter,
          );

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
    this.setState(state => ({
      tasks: [
        ...state.tasks,
        { text: taskToAdd, isComplete: false, category: category },
      ],
    }));
  };

  filterTasks = category => {
    this.setState(state => ({
      currentFilter: category,
    }));
  };
}

export default App;
