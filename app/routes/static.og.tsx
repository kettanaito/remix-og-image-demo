import { LoaderFunctionArgs } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { isOpenGraphImageRequest, OpenGraphImageData } from 'remix-og-image'

export function openGraphImage(): Array<OpenGraphImageData> {
  return [{ name: 'static' }]
}

export async function loader({ request }: LoaderFunctionArgs) {
  if (isOpenGraphImageRequest(request)) {
    return Response.json(openGraphImage())
  }

  return null
}

export default function StaticRouteOpenGraphImage() {
  return (
    <div>
      <Link to="/static" className="inline-block mb-5">
        Back to the page
      </Link>

      <div
        id="og-image"
        className="h-[630px] w-[1200px] flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-800 text-white p-10"
      >
        <div className="text-center">
          <h1 className="text-8xl font-black">Static route</h1>
          <p className="mt-10 text-4xl text-blue-200">
            This route has static data.
          </p>
        </div>
      </div>
    </div>
  )
}
