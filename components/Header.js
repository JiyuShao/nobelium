import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: `${BLOG.path}/`, show: true },
    {
      id: 2,
      name: locale.NAV.READING,
      to: `${BLOG.path}/reading`,
      show: BLOG.showReading
    },
    { id: 3, name: 'Github', to: BLOG.githubLink, show: true },
    { id: 4, name: locale.NAV.RSS, to: '/feed', show: true }
  ]
  return (
    <div className="flex-shrink-0 flex items-center">
      <ul className="flex flex-row">
        {links.map(
          (link) =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 font-medium text-gray-900 hover:text-primary-600 dark:text-gray-50 dark:hover:text-primary-400"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
        <ThemeToggle />
      </ul>
    </div>
  )
}

const Header = ({ fullWidth }) => {
  return (
    <>
      <div
        className={`sticky-nav m-auto w-full flex flex-row justify-between items-center py-6 bg-opacity-60 ${
          !fullWidth ? 'max-w-4xl px-4' : 'px-4 md:px-24'
        }`}
      >
        <Link href="/">
          <a className="flex-shrink-0 flex items-center" aria-label={BLOG.title}>
            <Image
              className="rounded-full"
              width={24}
              height={24}
              style={{
                width: 24,
                height: 24
              }}
              src="/favicon.ico"
              alt={BLOG.title}
            />
            <span className="ml-2 whitespace-nowrap font-medium text-gray-900 hover:text-primary-600 dark:text-gray-50 dark:hover:text-primary-400 header-name">
              {BLOG.description}
            </span>
          </a>
        </Link>
        <NavBar />
      </div>
    </>
  )
}

export default Header
