
interface TextInputProps {
  weight: string;
  borderColor: string; // Opcional, si es necesario
  type?: string; // Opcional, si es necesario
  specials?:string
  placeHolder?:string
}

const TextInput: React.FC<TextInputProps> = ({ weight, type, placeHolder, specials }) => {

  return (
      <input
        placeholder={placeHolder}
        type={type}
        className={` rounded-[6px] w-${weight} h-[38px] border-solid border-[1px] focus:outline-none ${specials} p-2 font-light`
      }
      />
  )
}

export default TextInput
