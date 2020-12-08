import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../Redux/actions'

import Button from '../../Components/Button'
import TextInput from '../../Components/TextInput'
import Dropdown from '../../Components/Dropdown'

import './style.scss'

const ENGINES_LIST = ['Google', 'Bing', 'Both']

export default function SearchSection () {
  const { value, engine, fetching } = useSelector(state => state.search)
  const dispatch = useDispatch()

  const handleInputChange = (newValue) => {
    if (fetching) {
      return
    }

    dispatch(actions.updateSearchValue(newValue))
  }

  const handleEngineChange = (newValue) => {
    dispatch(actions.updateSearchEngine(newValue))
  }

  const submitSearch = () => {
    const searchAction = actions[engine === 'bing' ? 'searchBing' : (engine === 'both' ? 'searchAllEngines' : 'searchGoogle')]

    dispatch(searchAction(value))
  }

  return (
    <section className="search">
      <div className="search__bar">
        <TextInput className="search__bar__input" value={value} onChange={handleInputChange} placeholder="Type your search here" loading={fetching} />
        <Dropdown className="search__bar__select" options={ENGINES_LIST} placeholder="Engines" value={engine} onChange={handleEngineChange} />
        <Button className="search__bar__button" label="Search" onClick={submitSearch} />
      </div>
    </section>
  )
}