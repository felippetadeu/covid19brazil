import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'

import { getCOVIDInfo } from '../../services/brasilIOServices'
import { getUfs, getMunicipios } from '../../services/ibgeServices'
import { uf, municipio } from '../../features/brasilIO/brasilIOSlice'

moment.locale('pt-Br')
export default function Home() {
  const cidade = useSelector(municipio)
  const estado = useSelector(uf)
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

  useEffect(() => {
    results.map(r => {
      r.date = moment(new Date(r.date + "T00:00:00")).format('DD/MM/YYYY - dddd')
      return r
    })
    setData(results)
  }, [results])

  const handleCOVIDClick = async () => {
    const response = await getCOVIDInfo(estado, cidade)
    setLoading(true)
    if (response.status === 200){
      setResults(response.data.results)
      setLoading(false)
    }
  }

  return (
    <div className="">
      <div>
        
        {cidade}
        {estado}
        
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