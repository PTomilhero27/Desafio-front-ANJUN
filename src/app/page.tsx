'use client'

import Input from "./components/Input";
import { useState } from 'react'
import Image from 'next/image'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default function Home() {
  const axios = require('axios');
  const [data, setData] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [error, setError] = useState<boolean>(false);
  
  const childToParent = (childdata: string) => {
    setData(childdata);
    console.log(childdata.length);
    setDefinitions([])
    setSynonyms([])

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${childdata}`).then((res: any)  => {
      setError(false)
      console.log(res.data[0].meanings[0]);
      setDefinitions(res.data[0].meanings[0].definitions)
      setSynonyms(res.data[0].meanings[0].synonyms[0])
    }).catch((err: any) => {
      setError(true)
    })

  }

  return (
    <main className="px-6 pt-16">
      <Input childToParent={childToParent} placeholder="Digite a palavra" type="search" />

      <p className="text-3xl font-bold py-12"> {data} </p>

      { data && !error ? 
        <>
          <section className="flex items-center gap-4">
            <span className="text-base font-bold">Noun</span>
            <div className="w-full h-[1px] bg-[#999]"></div>
          </section>

          <section >
            <div className="my-7">
              <span className="text-[#999] text-base font-medium">Meanings</span>
            </div>

            {
              definitions.map((definition: any, i: number) => {
              return (
                <div className="flex items-center mb-5 gap-3" key={i}>
                  <Image
                    src='/bola-roxa.svg'
                    alt='Imagem de uma bolinha roxa para marcar o paragrafo'
                    width={7}
                    height={7}
                  />
                  <p className="text-sm">{definition.definition}</p>
                </div>
                );
              })
            }
        
          </section>

          <section className="flex items-center gap-5 mt-10">
            <p className="text-[#999] text-base font-medium">Synonyms</p>
            <div className="flex items-center gap-4">
              <span className="text-[#A745EC] text-sm font-medium">{synonyms}</span>
            </div>

          </section>
      </>
      :data.length > 0 && error ? <span className="text-base font-bold flex justify-center">Palavra não encontrada, tente novamente! </span> : ''}


      {
        error && data.length == 0 ?
          <Stack className="absolute bottom-10" sx={{ width: '528px' }} spacing={2}>
            <Alert  severity="error" onClose={() =>  setError(false)}>Campo vazio, por favor digite algo</Alert>
          </Stack>
        :""
      }




    </main>
  )
}
