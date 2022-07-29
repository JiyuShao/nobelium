import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const Pagination = ({ currentPage, totalPages }) => {
  const locale = useLocale()
  const showNext = currentPage < totalPages
  let additionalClassName = 'justify-between'
  if (currentPage === 1 && showNext) additionalClassName = 'justify-end'
  if (currentPage !== 1 && !showNext) additionalClassName = 'justify-start'
  return (
    <div
      className={`flex justify-between font-medium text-black dark:text-gray-100 ${additionalClassName}`}
    >
      <div>
        {currentPage !== 1 && (
          <Link
            href={
              currentPage - 1 === 1
                ? `${BLOG.path}/`
                : `${BLOG.path}/page/${currentPage - 1}`
            }
          >
            <a>
              <button rel="prev" className="block cursor-pointer">
                ← {locale.PAGINATION.PREV}
              </button>
            </a>
          </Link>
        )}
      </div>

      <div>{`${currentPage} of ${totalPages}`}</div>

      <div>
        {showNext && (
          <Link href={`${BLOG.path}/page/${currentPage + 1}`}>
            <a>
              <button rel="next" className="block cursor-pointer">
                {locale.PAGINATION.NEXT} →
              </button>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Pagination
