import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="glassmorphism mx-auto flex max-w-[25rem] flex-col items-center p-3 dark:text-gray-300">
      <Image
        src={author.photo.url}
        alt={author.name}
        width="60px"
        height="60px"
        className="object-fit mt-[-60px] rounded-full"
      />
      <div className="mb-4 text-center ">{author.name}</div>
      {author.bio}
    </div>
  )
}

export default Author
