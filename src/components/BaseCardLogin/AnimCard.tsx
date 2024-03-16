
import { useState } from 'react';

import '../../styles/style.scss';
import Button from '../Button';

const AnimCard = () => {
    const [des, setDes] = useState(false);

    const desp = () => {
        setDes(!des);
    };

    return (
        <div
            className={
                `w-[50%] flex bg-yellow min-h-[100%] absolute z-10
                ${des ? 
                    ' anim-card rounded-r-[120px] mr-[50%]'
                    :
                    ' ml-[50%] anim-org rounded-l-[120px]'

                }`
            }
        >
            {
                des ?
                    <div className='w-full flex flex-col'>
                        <div className='font-bold text-[40px] text-white mt-10'>
                            ¡Sigue aprendiendo!
                        </div>
                        <div className='font-thin text-white mt-5 text-[30px] mx-5'>
                            “Aprender es como remar contra corriente: en cuanto se deja, se retrocede”.
                        </div>
                        <div className='text-[30px] font-light text-white mt-5'>
                            Edward Benjamin Britten.
                        </div>
                        <Button
                            onClick={desp}
                            text='Inicia Sesión'
                            specials={'text-white border-solid border-white border-[1px] hover:bg-[#ffffff] hover:text-yellow ml-[25%] mt-5 w-[200px] text-[20px]'}
                        />
                    </div>
                    :
                    <div className='w-full flex flex-col'>
                        <div className='font-bold text-[40px] text-white mt-10'>
                            ¡Se parte del equipo!
                        </div>
                        <div className='font-thin text-white mt-5 text-[30px] mx-5'>
                            "La mejor forma de predecir el futuro es crearlo".
                        </div>
                        <div className='text-[30px] font-light text-white mt-5'>
                            Abraham Lincoln.
                        </div>

                        <Button
                            onClick={desp}
                            text='Regístrate'
                            specials={'text-white border-solid border-white border-[1px] hover:bg-[#ffffff] hover:text-yellow mt-10 w-[200px] text-[20px] ml-[30%]'}
                        />
                    </div>
            }

        </div>
    );
};

export default AnimCard;
