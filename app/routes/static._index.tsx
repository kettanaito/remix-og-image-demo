import { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    {
      name: 'og:image',
      content: '/og/static.webp',
    },
  ]
}

export default function StaticRoute() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Static route</h1>
      <p>This is just a regular route. Display something for the user here.</p>

      <footer className="mt-5 flex gap-2.5">
        <Link to="/">Back to homepage</Link>
        <Link to="./og" className="font-bold">
          Preview OpenGraph image
        </Link>
      </footer>
    </div>
  )
}
