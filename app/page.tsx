import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className='text-wrap'>
   
      <h1 className="tracking-tight text-balance mb-2">
        <span className=' px-1 '>Abner Ribeiro software engineer </span>
      </h1>

      <p className="w-fit tracking-tight text-balance">You can see more of my work on  <a href="https://x.com/abneribeiroo" className='underline underline-offset-2'>Twitter</a> and more of my code on <a href="https://github.com/abneribeiroo" className='underline underline-offset-2'>GitHub</a>.</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
