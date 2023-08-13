import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: translateX(-30px);
    }
`

export const pulsate = keyframes`
    0%, 100% {
      transform: scale(0.1, 0.1);
      opacity: 0;
    }
  
    50% {
      opacity: 1;
    }
  
    100% {
      transform: scale(1.2, 1.2);
      opacity: 0;
    }
`

export const shine = keyframes`
    from {
        background-position: 100%;
    }

    to {
        background-position: 0;
    }
`

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`
