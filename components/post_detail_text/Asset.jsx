const Asset = ({ asset }) => {
  console.log(asset)
  return <img className="my-5 rounded-md" src={asset.src} alt={asset.alt} />
}

export default Asset
