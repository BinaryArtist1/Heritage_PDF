import React from 'react'
import styles from './style.module.css'

type FormInputProps = {
  label: string
  value: string | number
  onChange: (value: string) => void
  className?: string
  type: 'text' | 'file' | 'password' | 'number' | 'date'
  error: string
  hideArrows?: boolean
}

export default function FormInput({
  label,
  value,
  onChange,
  className,
  type = 'text',
  error = '',
  hideArrows = true
}: FormInputProps) {
  return (
    <div className={`${className} my-4`}>
      <div className="mb-2">
        <label className="font-bold text-gray-700">{`${label}`}</label>
      </div>
      <input
        placeholder={label}
        type={type}
        value={value}
        className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tahiti-600 sm:text-sm sm:leading-6 ${
          hideArrows && styles.hide_arrows
        }`}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      ></input>
      {error.length !== 0 && (
        <div className="ml-1 mt-1 text-sm text-red-400">{error}</div>
      )}
    </div>
  )
}
