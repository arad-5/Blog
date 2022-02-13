const Author = ({ author }) => {
  console.log(author)
  return (
    <div className="glassmorphism  mx-auto flex max-w-[25rem] flex-col items-center p-3 text-gray-300">
      <div className=" mb-4 text-center ">
        <img
          src={author.photo.url}
          alt={author.name}
          width="60px"
          height="60px"
          className="object-fit mt-[-60px] block rounded-full"
        />
        {author.name}</div>
      {author.bio}
    </div>
  )
}

export default Author
