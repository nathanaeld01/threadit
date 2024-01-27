import { type Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				background:
					'color-mix(in srgb, var(--background), transparent calc(100% - 100% * <alpha-value>))',
				foreground:
					'color-mix(in srgb, var(--foreground), transparent calc(100% - 100% * <alpha-value>))',
				alternate:
					'color-mix(in srgb, var(--alternate), transparent calc(100% - 100% * <alpha-value>))',
				muted: 'color-mix(in srgb, var(--border-base), transparent calc(100% - 100% * <alpha-value>))',
				card: 'color-mix(in srgb, var(--card), transparent calc(100% - 100% * <alpha-value>))',
				primary: {
					DEFAULT:
						'color-mix(in srgb, var(--primary), transparent calc(100% - 100% * <alpha-value>))',
					hover: 'color-mix(in srgb, var(--primary-hover), transparent calc(100% - 100% * <alpha-value>))',
				},
				secondary: {
					DEFAULT:
						'color-mix(in srgb, var(--secondary), transparent calc(100% - 100% * <alpha-value>))',
					hover: 'color-mix(in srgb, var(--secondary-hover), transparent calc(100% - 100% * <alpha-value>))',
				},
				tertiary: {
					DEFAULT:
						'color-mix(in srgb, var(--tertiary), transparent calc(100% - 100% * <alpha-value>))',
					hover: 'color-mix(in srgb, var(--tertiary-hover), transparent calc(100% - 100% * <alpha-value>))',
				},
			},
			backgroundColor: {
				success:
					'color-mix(in srgb, var(--success), transparent calc(100% - 100% * <alpha-value>))',
				warning:
					'color-mix(in srgb, var(--warning), transparent calc(100% - 100% * <alpha-value>))',
				error: 'color-mix(in srgb, var(--error), transparent calc(100% - 100% * <alpha-value>))',
				'success-hover':
					'color-mix(in srgb, var(--success-hover), transparent calc(100% - 100% * <alpha-value>))',
				'warning-hover':
					'color-mix(in srgb, var(--warning-hover), transparent calc(100% - 100% * <alpha-value>))',
				'error-hover':
					'color-mix(in srgb, var(--error-hover), transparent calc(100% - 100% * <alpha-value>))',
			},
			textColor: {
				success:
					'color-mix(in srgb, var(--success-text), transparent calc(100% - 100% * <alpha-value>))',
				warning:
					'color-mix(in srgb, var(--warning-text), transparent calc(100% - 100% * <alpha-value>))',
				error: 'color-mix(in srgb, var(--error-text), transparent calc(100% - 100% * <alpha-value>))',
				muted: 'color-mix(in srgb, var(--muted), transparent calc(100% - 100% * <alpha-value>))',
			},
			borderColor: {
				border: 'color-mix(in srgb, var(--border-base), transparent calc(100% - 100% * <alpha-value>))',
				hover: 'color-mix(in srgb, var(--border-hover), transparent calc(100% - 100% * <alpha-value>))',
			},
			ringColor: {
				ring: 'color-mix(in srgb, var(--border-ring), transparent calc(100% - 100% * <alpha-value>))',
			},
			fontFamily: {
				inter: "'Inter', sans-serif",
				poppins: "'Poppins', sans-serif",
			},
			keyframes: {
				accordionDown: {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				accordionUp: {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				collapsibleDown: {
					from: { height: '0' },
					to: { height: 'var(--radix-collapsible-content-height)' },
				},
				collapsibleUp: {
					from: { height: 'var(--radix-collapsible-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordionDown 0.2s ease-out',
				'accordion-up': 'accordionUp 0.2s ease-out',
				'collapsible-up': 'collapsibleUp 0.2s ease-out',
				'collapsible-down': 'collapsibleDown 0.2s ease-out',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.size-dv': {
					width: '100dvw',
					height: '100dvh',
				},
			});
		}),
	],
} satisfies Config;
