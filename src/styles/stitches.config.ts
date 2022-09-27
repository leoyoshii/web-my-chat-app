import {createStitches, CSSProperties} from '@stitches/react'
import {TypographyType} from './stitches.types'

export const {styled, css, globalCss, keyframes, theme, createTheme, getCssText, config} =
  createStitches({
    prefix: 'web-chat',
    media: {
      bp1: '(min-width: 320px)', // Mobiles
      bp2: '(min-width: 426px)', // Tablet
      bp3: '(min-width: 769px)', // Laptop
      bp4: '(min-width: 1025px)', // Desktop
      bp5: '(min-width: 1440px)', // Large Desktop
    },
    theme: {
      colors: {
        primaryLight: '#73B2FF',
        primaryMain: '#308CFE',
        primaryDark: '#0959BB',
        secondaryLight: '#C9A0FF',
        secondaryMain: '#9747FF',
        secondaryDark: '#671ACA',
        // Gray Colors
        grayLight: '#E5E7EB',
        grayMain: '#9CA3AF',
        grayDark: '#4B5563',
        // Background Colors
        bgDefault: '#F3F4F6',
        bgPaper: '#FFFFFF',
        // Utils Colors
        warningLight: '#FFED8E',
        warningMain: '#EAC608',
        warningDark: '#CB9200',
        infoLight: '#BFDBFE',
        infoMain: '#60A5FA',
        infoDark: '#2563EB',
        successLight: '#86EFAC',
        successMain: '#22C55E',
        successDark: '#15803D',
        errorLight: '#FECACA',
        errorMain: '#F87171',
        errorDark: '#DC2626',
        //Typography Colors
        textPrimary: '#202020',
        textSecondary: '#6B7280',
        textDeactivated: '#D1D5DB',
        textAltPrimary: '#FFFFFF',
      },
      space: {
        xxs: '0.125rem', // 2px
        xs: '0.25rem', // 4px
        sm: '0.50rem', // 8px
        ms: '0.75rem', // 12px
        md: '1.00rem', // 16px
        ml: '1.25rem', // 20px
        lg: '1.50rem', // 24px
        xl: '1.75rem', // 28px
        xxl: '2.00rem', // 32px
      },
      fonts: {},
      sizes: {
        xxs: '0.125rem', // 2px
        xs: '0.25rem', // 4px
        sm: '0.50rem', // 8px
        ms: '0.75rem', // 12px
        md: '1.00rem', // 16px
        ml: '1.25rem', // 20px
        lg: '1.50rem', // 24px
        xl: '1.75rem', // 28px
        xxl: '2.00rem', // 32px
      },
      shadows: {
        base: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
        xl: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        xxl: '0px 25px 50px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
      },
    },
    utils: {
      utilTypography: (value: TypographyType): CSSProperties => {
        switch (value) {
          case 'Heading1':
            return {
              fontSize: '6rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '117%',
              letterSpacing: '-1.5px',
            }
          case 'Heading2':
            return {
              fontSize: '3.75rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '120%',
              letterSpacing: '-0.5px',
            }
          case 'Heading3':
            return {
              fontSize: '3rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '117%',
            }
          case 'Heading4':
            return {
              fontSize: '2.125rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '118%',
              letterSpacing: '0.25px',
            }
          case 'Heading5':
            return {
              fontSize: '1.5rem',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '133%',
              letterSpacing: '-0.18px',
            }
          case 'Heading6':
            return {
              fontSize: '1.25rem',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '120%',
              letterSpacing: '0.15px',
            }
          case 'Subtitle1':
            return {
              fontSize: '1rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '150%',
              letterSpacing: '0.0015em',
            }
          case 'Subtitle2':
            return {
              fontSize: '0.875rem',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '171%',
              letterSpacing: '0.1px',
            }
          case 'Paragraph1':
            return {
              fontSize: '1rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '150%',
              letterSpacing: '0.5px',
            }
          case 'Paragraph2':
            return {
              fontSize: '0.875rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '171%',
              letterSpacing: '0.25px',
            }
          case 'Button':
            return {
              fontSize: '0.875rem',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '114%',
              letterSpacing: '1.25px',
              textTransform: 'uppercase',
            }
          case 'Caption':
            return {
              fontSize: '0.75rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '133%',
              letterSpacing: '0.4px',
            }
          case 'OverLine':
            return {
              fontSize: '0.75rem',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '133%',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }
          default:
            return {}
        }
      },
    },
  })

export const injectGlobalStyles = globalCss({
  '*': {boxSizing: 'border-box', margin: 0, padding: 0},
  '*:after': {boxSizing: 'border-box'},
  '*:before': {boxSizing: 'border-box'},
})
