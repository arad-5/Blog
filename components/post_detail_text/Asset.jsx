import Image from 'next/image'

const Asset = ({ asset }) => {
    return (
        <div className="my-5">
            <Image
                layout="responsive"
                className="rounded-md object-contain"
                width={240}
                height={135}
                src={asset.src}
                alt={asset.alt}
            />
        </div>
    )
}

export default Asset
