export default function Footer() {
  return (
    <footer className="flex flex-col p-4 border border-x-0 border-b-0 border-black/10">
      <div className="mx-auto">
        <ul className="flex space-x-4">
          <li>
            <a target="_blank" href="https://twitter.com" className="hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com" className="hover:underline">
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="#" className="hover:underline">
              Email
            </a>
          </li>
        </ul>

        <div className="mt-4 text-sm">© 2024 Your Company Name</div>
      </div>
    </footer>
  )
}
