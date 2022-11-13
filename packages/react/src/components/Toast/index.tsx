import { ComponentProps, ReactNode } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  duration: number
  children: ReactNode
}

export function Toast({ title, description, duration, children }: ToastProps) {
  return (
    <ToastRadix.Provider swipeDirection="right" duration={duration}>
      {children}
      <ToastContainer>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastContainer>

      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
