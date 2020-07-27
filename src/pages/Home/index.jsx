import React, { useState, useEffect } from 'react'
import moment from 'moment'
import ptBr from 'moment/locale/pt-br'
import DataTable from 'react-data-table-component'
import { getCOVIDInfo } from '../../services/brasilIOServices'
import { getUfs, getMunicipios } from '../../services/ibgeServices'

moment.locale('pt-Br')
export default function Home() {

  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const columns = [
    {name: 'Cidade', selector: 'city'},
    {name: 'Data', selector: 'date'},
    {name: 'Confirmados', selector: 'confirmed'},
    {name: 'Mortes', selector: 'deaths'},
    {name: 'UF', selector: 'state'},
  ]
  const [data, setData] = useState([])
  const [ufs, setUfs] = useState([])
  const [municipios, setMunicipios] = useState([])

  async function getListaUF() {
    const response = await getUfs()
    if (response.status === 200){
      setUfs(response.data.sort(function (a, b){
        if (a.sigla < b.sigla) return -1;
        if (a.sigla > b.sigla) return 1;
        return 0;
      }).map(r => {
        return {
          id: r.sigla,
          text: r.sigla
        }
      }))
    }
  }

  async function getListaMunicipio(uf){
    const response = await getMunicipios(uf)
    if (response.status === 200){
      setMunicipios(response.data.sort(function (a, b){
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
      }).map(r => {
        return {
          id: r.nome,
          text: r.nome
        }
      }))
    }
  }

  useEffect(() => {
    getListaUF() 
  }, [])

  useEffect(() => {
    if (uf)
      getListaMunicipio(uf)
  }, [uf])

  useEffect(() => {
    results.map(r => {
      r.date = moment(new Date(r.date + "T00:00:00")).format('DD/MM/YYYY - dddd')
      return r
    })
    setData(results)
  }, [results])

  const handleCOVIDClick = async () => {
    const response = await getCOVIDInfo(uf, city)
    setLoading(true)
    if (response.status === 200){
      setResults(response.data.results)
      setLoading(false)
    }
  }

  return (
    <div className="">
      <div>
        
        <select value={uf} onChange={(e) => setUf(e.target.value)}>
          {ufs.map((u => {
            return <option value={u.id}>{u.text}</option>
          }))}
        </select>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          {municipios.map((u => {
            return <option value={u.id}>{u.text}</option>
          }))}
        </select>
        
        <button onClick={handleCOVIDClick}>COVID</button>
      </div>
      <div className="">
        <DataTable 
          title="CASOS COVID-19"
          columns={columns}
          data={data}
          progressPending={loading}
          dense={true}
          highlightOnHover={true}
          pagination={true}/>
      </div>
    </div>
  )
}