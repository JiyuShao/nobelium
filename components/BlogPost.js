import FormattedDate from "@/components/FormattedDate";
import TagItem from '@/components/TagItem'
import { useConfig } from "@/lib/config";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <div key={post.id} className="py-6 md:py-8 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <div className="flex-shrink-0 text-base font-medium leading-6 text-gray-600 dark:text-gray-400">
        <FormattedDate date={post.date} />
      </div>
      <div className="space-y-2 xl:col-span-3">
        <div className="md:flex-row md:items-baseline">
          <Link href={`${BLOG.path}/${post.slug}`} aria-label={`Read "${post.title}"`}>
            <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 tracking-tight">
              {post.title}
            </h2>
          </Link>
          <div className="flex flex-wrap">
            {post.tags.map((tag) => (
              <TagItem key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="hidden md:block leading-8 text-gray-500 dark:text-gray-400">
          {post.summary}
        </p>
        <div className="text-base font-medium leading-6">
          <Link
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href={`${BLOG.path}/${post.slug}`}
            aria-label={`Read "${post.title}"`}
          >
            Read more &rarr;

          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
