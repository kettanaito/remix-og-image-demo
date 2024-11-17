import { LoaderFunctionArgs, redirect } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { isOpenGraphImageRequest, OpenGraphImageData } from 'remix-og-image'
import { getDataById } from '~/utils/get-data-by-id'
import allData from '~/data.json'

export function openGraphImage() {
  return Object.keys(allData).map<OpenGraphImageData>((slug) => {
    return {
      name: slug,
      params: { slug },
    }
  })
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  if (isOpenGraphImageRequest(request)) {
    return Response.json(openGraphImage())
  }

  const { slug } = params

  if (!slug) {
    return redirect('/')
  }

  const data = getDataById(slug)

  return {
    slug,
    data,
  }
}

export default function DynamicRouteOpenGraphImage() {
  const { slug, data } = useLoaderData<typeof loader>()

  return (
    <div>
      <Link to={`/dynamic/${slug}`} className="inline-block mb-5">
        Back to the page
      </Link>

      <div
        id="og-image"
        className="h-[630px] w-[1200px] flex items-center justify-center bg-gradient-to-tr from-amber-500 to-amber-800 text-white p-10"
      >
        <div className="text-center">
          <h1 className="text-8xl font-black">{data.title}</h1>
          <p className="mt-10 text-4xl text-amber-200">{data.description}</p>
        </div>
      </div>
    </div>
  )
}
