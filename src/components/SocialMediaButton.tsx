interface params {
    ico : any
}
const SocialMediaButton: React.FC<params> = ({ ico }) => {
    return (
        <div className='rounded-full border-solid border-[1px] border-yellow h-[40px] w-[40px] items-center justify-center pt-[3%] cursor-pointer hover:bg-yellow duration-500'>
            {ico}
        </div>
    )
}

export default SocialMediaButton
