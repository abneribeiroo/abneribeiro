import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Notes',
  description: 'Read my notes.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Notes </h1>
      <BlogPosts />
    </section>
  )
}
