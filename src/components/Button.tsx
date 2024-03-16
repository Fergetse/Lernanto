interface params {
  text:string
  specials?:string
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const Button : React.FC<params>= ({text, onClick, specials}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer h-[38px] text-center justify-center items-center flex ${specials} rounded-[5px] duration-300 font-thin`}
    >
      {
        text
      }
    </div>
  )
}

export default Button
