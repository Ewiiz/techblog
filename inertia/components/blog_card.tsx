import { Link } from '@inertiajs/react'
import { ExternalLink } from 'lucide-react'

export default function BlogCard() {
  return (
    <article className="mt-8">
      <img src="" alt="" className="h-60 w-full" />
      <header className="mb-3">
        <p className="font-semibold text-accent-purple text-sm mt-6">Sunday , 1 Jan 2023</p>
        <h3 className="font-semibold text-lg mt-3">
          <Link href="#" className="flex justify-between items-center">
            UX review presentations <ExternalLink />
          </Link>
        </h3>
      </header>
      <p className="text-base text-secondary-light dark:text-secondary-dark">
        How do you create compelling presentations that wow your colleagues and impress your
        managers?
      </p>
      <div className="space-x-2 mt-6">
        <span className="rounded-full bg-purple-100 text-accent-purple px-3 py-1">Design</span>
        <span className="rounded-full bg-blue-200 text-accent-blue px-3 py-1">Research</span>
        <span className="rounded-full bg-pink-100 text-accent-pink px-3 py-1">Presentation</span>
      </div>
    </article>
  )
}
