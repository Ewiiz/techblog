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
      <div className="space-y-5">
        <div className="flex items-center justify-between py-6 px-5 lg:hidden">
          YOUR LOGO
          <Menu size={32} />
        </div>
        <div className="border border-x-0 border-black/35 font-bold text-7xl text-center h-20 dark:border-white">
          THE BLOG
        </div>
      </div>

      <DarkMode />
      <main className="m-8 space-y-40">
        {/*Section des blogs récents*/}
        <section>
          <header>
            <h2 className="text-2xl font-semibold">Recent blog posts</h2>
          </header>
          <div className="space-y-40">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
        {/*Section de tous les blogs*/}
        <section>
          <header>
            <h2 className="text-2xl font-semibold">All blog posts</h2>
          </header>
          <div className="space-y-40">
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
