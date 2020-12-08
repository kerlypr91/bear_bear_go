import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../Redux/actions'

import Loader from '../../Components/Loader'

import './style.scss'

export default function ResultsSection () {
  const { fetching, results } = useSelector(state => state.search)

  const renderLoader = () => {
    if (fetching) {
      return <Loader />
    }

    return null
  }

  const renderResults = () => {
    if (fetching) {
      return null
    }

    return (
      <div className="results__list">
        <h4 className="results__list__count">Results found: {results.length}</h4>
        {
          results.map((result, index) => {
            const { title, description, url } = result

            return (
              <div key={index} className="results__list__result">
                <h2 className="results__list__result__title">{title}</h2>
                <h5 className="results__list__result__description">{description}</h5>
                <h4 className="results__list__result__url">{url}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <section className="results">
      {renderLoader()}
      {renderResults()}
    </section>
  )
}