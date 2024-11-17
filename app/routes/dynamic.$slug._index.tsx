import { LoaderFunctionArgs, MetaFunction, redirect } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import allData from '~/data.json'
import { getDataById } from '~/utils/get-data-by-id'

export function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params

  if (!slug) {
    return redirect('/')
  }

  const data = getDataById(slug)

  return {
    data,
  }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      name: 'og:image',
      content: `/og/${data}.webp`,
    },
  ]
}

export default function DynamicPage() {
  const { data } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1 className="mb-5 text-4xl font-bold">{data.title}</h1>
      <p>This is a dynamic route. It can render different pages:</p>
      <ul className="my-5 list-disc list-inside">
        {Object.entries(allData).map(([slug, data]) => (
          <li key={slug}>
            <Link to={`/dynamic/${slug}`}>{data.title}</Link>
          </li>
        ))}
      </ul>

      <footer className="flex gap-2.5 mt-5">
        <Link to="/">Back to homepage</Link>
        <Link to="./og" className="font-bold">
          Preview OpenGraph image
        </Link>
      </footer>
    </div>
  )
}
