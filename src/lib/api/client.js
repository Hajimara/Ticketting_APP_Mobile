import Axios from 'axios';

export default () => {
  return new Axios.create();
};
