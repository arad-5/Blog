import moment from 'moment'

const _profile = ({ author }) => {
    return (
        <div className="col-span-1 sticky top-8 ">
            <div className="glassmorphism p-4">
                <div className="mb-5 flex items-center space-x-8">
                    <img
                        src={author.photo.url}
                        alt={author.name}
                        className="h-[4rem] w-[4rem] rounded-full"
                    />
                    <div>
                        <h3 className="font-bold text-slate-200">
                            {author.name}
                        </h3>
                        <span className="text-slate-300">Joined at: </span>
                        {moment(author.createdAt).format('MMM DD, YYYY')}
                    </div>
                </div>
                <p>{author.bio}</p>
            </div>
        </div>
    )
}

export default _profile
