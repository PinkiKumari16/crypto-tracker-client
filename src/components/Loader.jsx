import React from 'react';

export const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px] z-100 fix">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
