import React from 'react'
import Link from 'next/link'

const ids = ['1', '2', '3', '4', '5']

interface TestNavigatorProps {
  basePath: string
}

export const TestNavigator: React.FC<TestNavigatorProps> = ({ basePath }) => {
  return (
    <div className="grid grid-cols-5 gap-4 m-12">
      {ids.map((id) => {
        return (
          <Link key={`${basePath}/i18n/${id}`} href={`${basePath}/i18n/${id}`} passHref>
            <div className="py-4 border-2 border-grey rounded text-center cursor-pointer">
              <>i18n {id}</>
            </div>
          </Link>
        )
      })}
      {ids.map((id) => {
        return (
          <Link key={`${basePath}/no-i18n/${id}`} href={`${basePath}/no-i18n/${id}`} passHref>
            <div className="py-4 border-2 border-grey rounded text-center cursor-pointer">
              <>no-i18n {id}</>
            </div>
          </Link>
        )
      })}
      {ids.map((id) => {
        return (
          <Link key={`${basePath}/empty-static-paths/${id}`} href={`${basePath}/empty-static-paths/${id}`} passHref>
            <div className="py-4 border-2 border-grey rounded text-center cursor-pointer">
              <>empty-static-paths {id}</>
            </div>
          </Link>
        )
      })}
      {ids.map((id) => {
        return (
          <Link
            key={`${basePath}/localized-static-paths/${id}`}
            href={`${basePath}/localized-static-paths/${id}`}
            passHref
          >
            <div className="py-4 border-2 border-grey rounded text-center cursor-pointer">
              <>localized-static-paths {id}</>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
