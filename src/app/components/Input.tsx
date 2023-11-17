import { InputHTMLAttributes, forwardRef, useState } from "react";
import Image from 'next/image'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  childToParent: any; 
};


export const Input = forwardRef<HTMLInputElement, InputProps >(({childToParent ,type="text", ...props}, ref) => {

  const [valor, setValor] = useState('');
  const handleChange = (event: any) => {
    setValor(event.target.value);
  };

  return (
    <div className="flex items-center relative">
      <input 
        className="outline-none w-full h-[60px] rounded-lg bg-white-smoke text-black p-5 font-bold text-base" 
        type={type} 
        ref={ref}
        {...props} 
        onChange={handleChange}
      />

      {type == 'search' ? 
        <button className="absolute right-[5%] top-[35%]" onClick={() => childToParent(valor)}>
          <Image
            src='/lupa.svg'
            alt='Imagem de uma lupa para pesquisar a palavra'
            width={20}
            height={20}
          />
        </button>

        : ''
      }

    </div>
  )
})