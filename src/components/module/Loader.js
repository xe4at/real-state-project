'use client';

import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <DotLoader color="#3B82F6" size={30} />
    </div>
  );
};

export default Loader;
