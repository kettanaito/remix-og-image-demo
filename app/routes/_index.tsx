import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import allData from '~/data.json'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix OG Image Demo' },
    {
      name: 'description',
      content: 'Build-time OpenGraph image generation in Remix',
    },
  ]
}

export default function Index() {
  const firstPostSlug = Object.keys(allData)[0]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">
        <a href="https://github.com/kettanaito/remix-og-image">
          remix-og-image
        </a>{' '}
        Demo
      </h1>
      <p className="mb-5">Browse these examples:</p>
      <ul className="list list-disc list-inside">
        <li>
          <Link to="/static">Static route</Link>
        </li>
        <li>
          <Link to={`/dynamic/${firstPostSlug}`}>Dynamic route</Link>
        </li>
      </ul>
    </div>
  )
}
