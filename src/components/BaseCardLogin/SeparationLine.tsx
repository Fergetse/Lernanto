interface params {
    specials : string
}

const SeparationLine : React.FC<params> = ({specials}) => {
  return (
    <div className={`min-w-full flex px-10 flex-row justify-center ${specials}`}>
          <span
            className={`
            rounded-full
            bg-yellow
            w-[45%]
            h-[1px]
            mt-3
            mr-3
            `}
          />
          <div className='font-thin text-[17px]'>
            or
          </div>
          <span
            className={`
            rounded-full
            bg-yellow
            h-[1px]
            w-[45%]
            mt-3
            ml-3
            `}
          />
        </div>
  )
}

export default SeparationLine
