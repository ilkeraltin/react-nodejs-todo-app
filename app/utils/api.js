import axios from 'axios';

const config = {
  headers: {
    accept: 'application/json',
  }
};

const api = {
  getAllTasks() {
    const url = `http://localhost:9001/tasks`;

    return axios.get(url, config)
    .then(
      response => response.data.tasks
    )
    .catch(
      err => console.log(err)
    );
  },
  getTask(id) {
    const url = `http://localhost:9001/task/${id}`;

    return axios.get(url, config)
    .then(
      response => response.data
    )
    .catch(
      err => console.log(err)
    );
  },
  createTask(title, desc) {
    const url = `http://localhost:9001/task/create/${title}/${desc}`;

    return axios.post(url, config)
    .then(
      response => response.data
    )
    .catch(
      err => console.log(err)
    );
  },
  updateTask(id, title, desc) {
    const url = `http://localhost:9001/task/update/${id}/${title}/${desc}`;

    return axios.put(url, config)
    .then(
      response => response.data
    )
    .catch(
      err => console.log(err)

    );
  },
  deleteTask(id) {
    const url = `http://localhost:9001/task/delete/${id}`;
    return axios.delete(url, config)
    .then(
      response => response.data
    )
    .catch(
      err => console.log(err)
    );
  },
};


export default api;
