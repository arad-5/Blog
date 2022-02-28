import Error from './_error'
import PrimaryButton from '../components/buttons/PrimaryButton'

const Custom500 = () => {
    return (
        <div className="container mx-auto mt-[20vh] px-10 text-center ">
            <h1 className="bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-[5rem] font-bold text-transparent md:text-[7rem]">
                505
            </h1>
            <span className="text-gray-500">
                <Error />
            </span>
            <p className=" pb-10 md:text-xl">
                We couldn't find the page you were looking for :(
            </p>
            <div className="mt-3 inline-block text-gray-500 border-t pt-5 px-10 border-gray-500">
                back to{" "}
                <PrimaryButton path="/" additionalStyle="py-1 px-2">
                    Home
                </PrimaryButton>
            </div>
        </div>
    )
}

export default Custom500
