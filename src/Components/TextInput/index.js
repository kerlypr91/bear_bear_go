import React from 'react'
import { Input } from 'semantic-ui-react'

export default function TextInput (props) {
  const { onChange, value, loading, placeholder, className } = props

  const handleChange = (event, data) => {
    const { value: newValue } = data

    onChange(newValue)
  }

  return (
    <Input
      inverted
      icon='search'
      value={value}
      onChange={handleChange}
      className={className}
      placeholder={placeholder}
      loading={loading}
    />
  )
}