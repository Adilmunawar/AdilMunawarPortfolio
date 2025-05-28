import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			spacing: {
				'13': '3.25rem',
				'18': '4.5rem',
				'24': '6rem',
				'26': '6.5rem',
				'28': '7rem',
				'30': '7.5rem',
				'32': '8rem',
				'35': '8.75rem',
				'36': '9rem',
				'37': '9.25rem',
				'38': '9.5rem',
				'40': '10rem',
				'42': '10.5rem',
				'44': '11rem',
				'48': '12rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cyber: {
					cyan: '#00ffff',
					blue: '#0080ff',
					dark: '#0a0a0a',
					gray: '#1a1a1a'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-15px) rotate(2deg)' },
					'66%': { transform: 'translateY(-25px) rotate(-2deg)' }
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(-3deg)' },
					'66%': { transform: 'translateY(-10px) rotate(3deg)' }
				},
				'drift-1': {
					'0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
					'25%': { transform: 'translate(30px, -20px) rotate(5deg) scale(1.05)' },
					'50%': { transform: 'translate(-15px, -40px) rotate(-3deg) scale(0.95)' },
					'75%': { transform: 'translate(-25px, 10px) rotate(8deg) scale(1.1)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' }
				},
				'drift-2': {
					'0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
					'25%': { transform: 'translate(-20px, 30px) rotate(-4deg) scale(0.9)' },
					'50%': { transform: 'translate(40px, 15px) rotate(6deg) scale(1.15)' },
					'75%': { transform: 'translate(10px, -25px) rotate(-7deg) scale(0.85)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' }
				},
				'drift-3': {
					'0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
					'25%': { transform: 'translate(25px, 35px) rotate(7deg) scale(1.08)' },
					'50%': { transform: 'translate(-30px, -10px) rotate(-5deg) scale(0.92)' },
					'75%': { transform: 'translate(15px, -35px) rotate(9deg) scale(1.12)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' }
				},
				'drift-4': {
					'0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
					'25%': { transform: 'translate(-35px, -15px) rotate(-6deg) scale(0.88)' },
					'50%': { transform: 'translate(20px, 40px) rotate(4deg) scale(1.18)' },
					'75%': { transform: 'translate(-10px, 25px) rotate(-8deg) scale(0.94)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' }
				},
				'drift-5': {
					'0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
					'25%': { transform: 'translate(40px, -30px) rotate(8deg) scale(1.06)' },
					'50%': { transform: 'translate(-25px, 20px) rotate(-4deg) scale(0.96)' },
					'75%': { transform: 'translate(35px, 35px) rotate(6deg) scale(1.14)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' }
				},
				'drift-6': {
					'0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
					'25%': { transform: 'translate(-40px, 25px) rotate(-9deg) scale(0.86)' },
					'50%': { transform: 'translate(35px, -35px) rotate(7deg) scale(1.16)' },
					'75%': { transform: 'translate(-20px, -10px) rotate(-5deg) scale(0.98)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' }
				},
				'drift-delayed-1': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'30%': { transform: 'translate(15px, -25px) rotate(3deg)' },
					'60%': { transform: 'translate(-20px, 10px) rotate(-4deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)' }
				},
				'drift-delayed-2': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'35%': { transform: 'translate(-18px, 22px) rotate(-3deg)' },
					'70%': { transform: 'translate(25px, -15px) rotate(5deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)' }
				},
				'drift-delayed-3': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'40%': { transform: 'translate(22px, 18px) rotate(4deg)' },
					'80%': { transform: 'translate(-15px, -20px) rotate(-2deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)' }
				},
				'drift-delayed-4': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'45%': { transform: 'translate(-25px, -12px) rotate(-5deg)' },
					'90%': { transform: 'translate(18px, 28px) rotate(3deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)' }
				},
				'drift-delayed-5': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'50%': { transform: 'translate(28px, -22px) rotate(6deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)' }
				},
				'drift-delayed-6': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'55%': { transform: 'translate(-20px, 25px) rotate(-4deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'float-delayed': 'float-delayed 10s ease-in-out infinite',
				'drift-1': 'drift-1 25s ease-in-out infinite',
				'drift-2': 'drift-2 30s ease-in-out infinite',
				'drift-3': 'drift-3 28s ease-in-out infinite',
				'drift-4': 'drift-4 32s ease-in-out infinite',
				'drift-5': 'drift-5 26s ease-in-out infinite',
				'drift-6': 'drift-6 29s ease-in-out infinite',
				'drift-delayed-1': 'drift-delayed-1 20s ease-in-out infinite',
				'drift-delayed-2': 'drift-delayed-2 22s ease-in-out infinite',
				'drift-delayed-3': 'drift-delayed-3 18s ease-in-out infinite',
				'drift-delayed-4': 'drift-delayed-4 24s ease-in-out infinite',
				'drift-delayed-5': 'drift-delayed-5 21s ease-in-out infinite',
				'drift-delayed-6': 'drift-delayed-6 23s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
