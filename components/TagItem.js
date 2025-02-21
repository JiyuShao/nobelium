import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <p className="mr-3 whitespace-nowrap text-sm font-semibold uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
      {tag}
    </p>
  </Link>
)

export default TagItem
