import { Head } from '@inertiajs/react'
import { Menu } from 'lucide-react'
import DarkMode from '~/components/dark_mode'
import BlogCard from '~/components/blog_card'

export default function BlogDetails() {
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
      </div>

      <main className="flex m-8 md:space-x-8 lg:space-x-32 lg:mx-28">
        {/*RECENT BLOGS*/}
        <section className="hidden md:flex flex-col md:max-w-min lg:max-w-md">
          <h2 className="font-semibold text-2xl">Recent blog posts</h2>
          <div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>

        {/*BLOG DETAILS*/}
        <section className="lg:max-w-4xl">
          <div className="flex flex-col">
            <header className="mb-5">
              <p className="font-semibold text-accent-purple text-sm">Sunday , 1 Jan 2023</p>
              <h3 className="font-bold text-lg mt-8 md:text-4xl">
                Grid system for better Design User Interface
              </h3>
            </header>
            <img src="" alt="" className="h-60 w-full" />
            <div className="leading-relaxed mt-8 space-y-4 text-secondary-light dark:text-secondary-dark">
              <p>
                A grid system is a design tool used to arrange content on a webpage. It is a series
                of vertical and horizontal lines that create a matrix of intersecting points, which
                can be used to align and organize page elements. Grid systems are used to create a
                consistent look and feel across a website, and can help to make the layout more
                visually appealing and easier to navigate.
              </p>
              <p>
                If you’ve been to New York City and have walked the streets, it is easy to figure
                out how to get from one place to another because of the grid system that the city is
                built on. Just as the predictability of a city grid helps locals and tourists get
                around easily, so do webpage grids provide a structure that guides users and
                designers alike. Because of their consistent reference point, grids improve page
                readability and scannability and allow people to quickly get where they need to go.
              </p>
            </div>
            <div className="mt-16">
              <img src="" alt="" className="h-60 w-full" />
              <div className="flex justify-center mt-1">
                <p className="text-sm max-w-md text-center text-secondary-light/90 dark:text-secondary-dark/90">
                  Definition: A grid is made up of columns, gutters, and margins that provide a
                  structure for the layout of elements on a page.
                </p>
              </div>
              <div className="space-y-3 mt-6 leading-relaxed text-secondary-light dark:text-secondary-dark">
                <p>
                  There are three common grid types used in websites and interfaces: column grid,
                  modular grid, and hierarchical grid.
                </p>
                <p>
                  Column grid involves dividing a page into vertical columns. UI elements and
                  content are then aligned to these columns.{' '}
                </p>
                <p>
                  Modular grid extends the column grid further by adding rows to it. This
                  intersection of columns and rows make up modules to which elements and content are
                  aligned. Modular grids are great for ecommerce and listing pages, as rows are
                  repeatable to accommodate browsing.
                </p>
                <p>
                  Hierarchical grid: Content is organized by importance using columns, rows, and
                  modules.
                </p>
                <p>
                  The most important elements and pieces of content take up the biggest pieces of
                  the grid.
                </p>
              </div>
              <div className="mt-5 space-y-4 leading-relaxed text-secondary-light dark:text-secondary-dark">
                <h3 className="font-bold text-lg">Breaking Down the Grid</h3>
                <p>
                  Regardless of the type of grid you are using, the grid is made up of three
                  elements: columns, gutters, and margins.
                </p>
                <p>
                  <span className="font-semibold">Columns</span>: Columns take up most of the real
                  estate in a grid. Elements and content are placed in columns. To adapt to any
                  screen size, column widths are generally defined with percentages rather than
                  fixed values and the number of columns will vary. For example, a grid on a mobile
                  device might have 4 columns and a grid on a desktop might have 12 columns.
                </p>
                <p>
                  <span className="font-semibold">Gutters</span>: The gutter is the space between
                  columns that separates elements and content from different columns. Gutter widths
                  are fixed values but can change based on different breakpoints. For example, wider
                  gutters are appropriate for larger screens, whereas smaller gutters are
                  appropriate for smaller screens like mobile.
                </p>
                <img src="" alt="" className="h-60 w-full" />
                <div className="flex justify-center mt-1">
                  <p className="text-sm max-w-md text-center text-secondary-light/90 dark:text-secondary-dark/90">
                    Definition: Three elements make up any grid: (1) columns, (2) gutters, and (3)
                    margins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
