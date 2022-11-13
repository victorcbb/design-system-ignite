import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  width: '22.5rem',

  padding: '$3 $5',

  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  position: 'relative',
  listStyle: 'none',
  cursor: 'pointer',
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
  marginTop: '$1',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',

  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$sm',
  padding: '$1',

  color: '$gray200',
  cursor: 'pointer',
  transition: 'all 200ms',
  lineHeight: '0',

  '&:hover': {
    color: '$white',
    fontWeight: '$bold',
    backgroundColor: '$gray600',
  },
})
