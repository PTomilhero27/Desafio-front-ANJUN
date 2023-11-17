import Image from 'next/image'

'use client'

import {ThemeProvider} from 'next-themes'

export default function Providers({children}: any) {
  return (
    <ThemeProvider>
      <div className='flex pt-10 items-center justify-center'>
        <div className='max-w-xl w-full items-center'>
          {children}
        </div>
      </div>
    </ThemeProvider>
  )
}
