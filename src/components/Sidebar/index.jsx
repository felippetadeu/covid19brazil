import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './index.scss'
import { getUfs, getMunicipios } from '../../services/ibgeServices'
import { alterarUf, alterarMunicipio } from '../../features/brasilIO/brasilIOSlice'

export default function Sidebar(){
  const dispatch = useDispatch()

  const [menuAberto, setMenuAberto] = useState(false)
  const [ufs, setUfs] = useState([])
  const [uf, setUf] = useState('')
  const [municipios, setMunicipios] = useState([])
  const [city, setCity] = useState('')

  useEffect(() => {
    
    async function getUFs(){
      const response = await getUfs()
      if (response.status === 200){
        setUfs(response.data.sort(function (a, b){
          if (a.sigla < b.sigla) return -1;
          if (a.sigla > b.sigla) return 1;
          return 0;
        }).map(r => {
          return {
            value: r.sigla,
            label: r.sigla
          }
        }))
      }
    }
    getUFs()
  }, [])

  useEffect(() => {
    async function getListaMunicipio(uf){
      const response = await getMunicipios(uf)
      if (response.status === 200){
        setMunicipios(response.data.sort(function (a, b){
          if (a.nome < b.nome) return -1;
          if (a.nome > b.nome) return 1;
          return 0;
        }).map(r => {
          return {
            value: r.nome,
            label: r.nome
          }
        }))
      }
    }

    if (uf) {
      getListaMunicipio(uf)
    }
  }, [uf])

  const atualizarCity = (value) => {
    dispatch(alterarMunicipio(value))
    setCity(value)
  }

  const atualizarUf = (value) => {
    dispatch(alterarUf(value))
    setUf(value)
  }

  return (
    <div className={"sidebar fixed" + (menuAberto ? " opened " : " closed ") }>
      <div className="sidebar-content">
        <div className="logo" onClick={() => setMenuAberto(!menuAberto)}></div>
        <div className="menu">
          <div className="selecao-estado">    
            <select value={uf} onChange={(e) => atualizarUf(e.target.value)} className="select">
              <option value="">Selecione um Estado</option>
              {ufs.map((u => {
                return <option value={u.value} key={u.value}>{u.label}</option>
              }))}
            </select>
          </div>
          <div className="selecao-cidades">
            <select value={city} onChange={(e) => atualizarCity(e.target.value)} className="select">
              <option value="">Selecione um Município</option>
              {municipios.map((u => {
                return <option value={u.value} key={u.value}>{u.label}</option>
              }))}
            </select>
          </div>
        </div>
        <div className="direitos-autorais">
          Esse é um site para uso de aprendizado na tecnologia React e os dados apresentados são através da API do <a href="https://brasil.io/home/">Brasil.IO</a>
        </div>
      </div>
    </div>
  )
}