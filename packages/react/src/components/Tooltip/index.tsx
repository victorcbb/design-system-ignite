import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode
}

export function Tooltip({ children, ...rest }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipContainer {...rest}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipRadix.Portal>
          <TooltipContent>
            26 de novembro - disponível
            <TooltipArrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipContainer>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
