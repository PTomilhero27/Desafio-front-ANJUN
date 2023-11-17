'use client'

import  {useTheme} from 'next-themes'
import { useEffect, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'

const ThemeButton = () => {

  const {resolvedTheme, setTheme} = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [])

  if(!mounted) {
    return null;
  }

  return (
    <FormGroup>
      <div className='flex items-center'>
        <FormControlLabel onClick={() => setTheme(resolvedTheme === 'dark' ? "light" : 'dark')} control={<Switch defaultChecked size='medium' />} label="" />

        <div>
          {
            resolvedTheme === 'light'?
            <SunIcon className='h-8 w-7 text-yellow-200' /> :
            <MoonIcon className='h-8 w-7 text-slate-500' />
          }
        </div>

      </div>
    </FormGroup>
  );
} 

export default ThemeButton;