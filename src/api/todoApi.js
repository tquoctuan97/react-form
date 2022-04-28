import axiosClient from './axiosClient';

const todoApi = {
  getAll() {
    const url = '/todos';
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/todos';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/todos/${data.id}`;
    return axiosClient.post(url, data);
  },

  delete(id) {
    const url = `/todos/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;