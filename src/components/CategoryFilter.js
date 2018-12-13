import React from 'react';

class CategoryFilter extends React.Component {
  render() {
    return (
      <form onSubmit={this.filterCategory}>
        <label htmlFor="chooseCategory">Filter by category: </label>
        <select id="chooseCategory">
          <option value="work">Work</option>
          <option value="wellness">Wellness</option>
          <option value="finance">Finance</option>
        </select>
        <button>Filter</button>
      </form>
    );
  }
  filterCategory = event => {
    event.preventDefault();
    this.props.filterTasks(event.target.chooseCategory.value);
  };
}

export default CategoryFilter;
