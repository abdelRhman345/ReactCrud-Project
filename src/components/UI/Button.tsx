import type { ButtonHTMLAttributes } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  className: string,
  width?: 'w-full' | 'w-fit'
}

const Button = ({children, className, width = 'w-full', ...rest} : IProps) => {
  return (
    <button className={`${className} ${width} uppercase p-2 rounded-sm text-white text-md cursor-pointer`} {...rest}>{children}</button>
  )
}

export default Button