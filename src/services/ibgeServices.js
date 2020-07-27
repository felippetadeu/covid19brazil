import axios from 'axios'

export const getUfs = async () => {
  return await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
}

export const getMunicipios = async (uf) => {
  return await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
}