import Image from 'next/image'

const Asset = ({ asset }) => {
    return (
        <div className="relative h-96">
            <Image
                unoptimized
                layout="fill"
                className="my-5 rounded-md object-cover"
                src={asset.src}
                alt={asset.alt}
            />
        </div>
    )
}

export default Asset
