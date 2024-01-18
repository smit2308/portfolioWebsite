import React from 'react'
import { loader } from '../assets/icons';
import Button from './Button';

const Loader = () => {
  return (
    <Button
      label={"Wait for it..."}
      textColor={"text-secondary"}
      iconURL={loader}
      disabled={true}
      bgColor={"bg-none"}
    />
  )
}

export default Loader;