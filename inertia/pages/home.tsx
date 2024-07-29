import { Head } from '@inertiajs/react'
import DarkMode from '~/components/dark_mode'
import { Menu } from 'lucide-react'
import BlogCard from '~/components/blog_card'
import Footer from '~/components/footer'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      {/*HEADER POUR MOBILE POUR L'INSTANT*/}
      <div className="space-y-5 lg:mx-28">
        <div className="flex items-center justify-between py-6 px-5">
          YOUR LOGO
          <Menu size={32} className="md:hidden" />
          <ul className="hidden md:flex space-x-5 text-lg lg:space-x-12">
            <li>Blog</li>
            <li>Projects</li>
            <li>About</li>
            <li>Newsletter</li>
          </ul>
          <DarkMode />
        </div>
        <div className="border border-x-0 border-black/35 font-bold text-7xl text-center h-20 dark:border-white lg:text-9xl lg:h-36">
          THE BLOG
        </div>
      </div>

      <main className="m-8 space-y-40 lg:mx-28 lg:space-y-2 lg:mt-16">
        {/*Section des blogs récents*/}
        <section>
          <header>
            <h2 className="text-2xl font-semibold">Recent blog posts</h2>
          </header>
          <div className="grid gap-20 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
            <BlogCard />

            <div>
              <BlogCard textRight />
              <BlogCard textRight />
            </div>

            <div className="lg:col-span-2">
              <BlogCard textRight />
            </div>
          </div>
        </section>
        {/*Section de tous les blogs*/}
        <section>
          <header>
            <h2 className="text-2xl font-semibold">All blog posts</h2>
          </header>
          <div className="grid grid-cols-1 gap-32 md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:grid-cols-3 lg:grid-rows-2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
