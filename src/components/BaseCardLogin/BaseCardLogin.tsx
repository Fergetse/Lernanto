import img from '../../assets/icos/original_yellowBg.svg'
import AnimCard from './AnimCard'
import Button from '../Button'
import TextInput from '../TextInput'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SocialMediaButton from '../SocialMediaButton';
import SeparationLine from './SeparationLine';




const BaseCardLogin = () => {

  const logIn = () => {
    alert('click')
  }

  return (
    <div className="w-[70%] h-[60%] z-10 flex fixed bg-white rounded-lg shadow-md flex-row ml-[15%] mt-[10%] ">

      <AnimCard />
      <div className='w-[50%] flex flex-col'>
        <img
          src={img}
          alt="icov"

          className='justify-center mt-10 h-[80px]' />

        <TextInput
          specials={'mx-10 text-[20px] mt-5 border-yellow'}
          weight={'10px'}
          borderColor={'yellow'}
          placeHolder={'Usuario'}
        />

        <TextInput
          specials={'mx-10 text-[20px] mt-5 border-yellow'}
          weight={'10px'}
          type='password'
          borderColor={'yellow'}
          placeHolder={'********'}
        />

        <Button
          text='Ingresar'
          onClick={logIn}
          specials={'hover:bg-[#FFD057] bg-yellow mt-5 mx-10 text-[20px]'}
        />

        <SeparationLine specials={'mt-5'}/>

        <div className='flex flex-row justify-between mx-24 mt-3'>
          <SocialMediaButton
            ico={<FaFacebookF className='w-full h-[80%]' />}
          />
          <SocialMediaButton
            ico={<FaGoogle className='w-full h-[80%]' />}
          />
          <SocialMediaButton
            ico={<FaTwitter className='w-full h-[80%]' />}
          />
        </div>

      </div>

      <div className='w-[50%] flex flex-col'>
        <img
          src={img}
          alt="icov"

          className='justify-center mt-10 h-[80px]' />

        <TextInput
          specials={'mx-10 text-[20px] mt-3 border-yellow'}
          weight={'10px'}
          borderColor={'yellow'}
          placeHolder={'Nombre'}
        />

        <TextInput
          specials={'mx-10 text-[20px] mt-3 border-yellow'}
          weight={'10px'}
          borderColor={'yellow'}
          placeHolder={'Correo'}
        />

        <TextInput
          specials={'mx-10 text-[20px] mt-3 border-yellow'}
          weight={'10px'}
          type='password'
          borderColor={'yellow'}
          placeHolder={'********'}
        />

        <Button
          text='Ingresar'
          onClick={logIn}
          specials={'hover:bg-[#FFD057] bg-yellow mt-3 mx-10 text-[20px]'}
        />

        <SeparationLine specials={'mt-3'}/>

        <div className='flex flex-row justify-between mx-24 mt-1'>
          <SocialMediaButton
            ico={<FaFacebookF className='w-full h-[80%]' />}
          />
          <SocialMediaButton
            ico={<FaGoogle className='w-full h-[80%]' />}
          />
          <SocialMediaButton
            ico={<FaTwitter className='w-full h-[80%]' />}
          />
        </div>

      </div>


    </div>
  )
}

export default BaseCardLogin

