/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Habilitar dark mode con clase
  theme: {
    extend: {
      colors: {
        // Puedes agregar colores personalizados aquí
      },
      spacing: {
        // Puedes agregar espaciados personalizados aquí
        '18': '4.5rem',
        '88': '22rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
      },
      screens: {
        'xs': '475px',
        // default breakpoints are preserved
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'mobile': '0 2px 8px -2px rgba(0, 0, 0, 0.1)',
        'mobile-lg': '0 4px 16px -4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}