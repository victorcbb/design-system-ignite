import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: '$3 $4',

  fontFamily: '$inter',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  color: '$gray100',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Trigger, {
  backgroundColor: '$gray900',
  width: '$4',
  height: '$2',
})
