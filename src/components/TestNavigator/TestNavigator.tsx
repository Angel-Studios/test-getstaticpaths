import React from 'react'
import { TestLink } from './TestLink'

const ids = ['1', '2', '3', '4', '5']

export const TestNavigator: React.FC = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "1rem", margin: "1.5rem" }}>
      {ids.map((id) => {
        return (<TestLink key={"empty-static-paths-"+id} page="empty-static-paths" id={id} />)
      })}
      {ids.map((id) => {
        return (<TestLink key={"static-paths-"+id} page="static-paths" id={id} />)
      })}
    </div>
  )
}
