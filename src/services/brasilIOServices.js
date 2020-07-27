import axios from 'axios';

export const getCOVIDInfo = async (state, city) => {
  return await axios.get(`https://brasil.io/api/dataset/covid19/caso/data/?state=${state}&city=${city}`)
};