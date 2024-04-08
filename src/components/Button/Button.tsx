import React from 'react'

type ButtonProps = {
  text: string | React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'danger' | 'outline' | 'outline-gray'
  disabled?: boolean
}

export default function Button({
  text,
  onClick,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  const getVarientClassName = () => {
    if (disabled) return 'bg-gray-200 text-gray-500 cursor-not-allowed'
    switch (variant) {
      case 'primary':
        return 'bg-tahiti-600 hover:bg-tahiti-500 text-white'
      case 'danger':
        return 'bg-red-500 hover:bg-red-400 text-white'
      case 'outline':
        return 'bg-white border border-tahiti-600 hover:bg-tahiti-600 text-tahiti-600 hover:text-white'
      case 'outline-gray':
        return 'bg-white border border-gray-600 hover:bg-gray-600 text-gray-600 hover:text-white'
      default:
        return 'bg-white border border-gray-600 hover:bg-gray-600 text-gray-600 hover:text-white'
    }
  }
  return (
    <button
      disabled={disabled}
      className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm transition duration-200  focus:outline focus:outline-2 focus:outline-tahiti-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahiti-600 ${getVarientClassName()}`}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      {text}
    </button>
  )
}
