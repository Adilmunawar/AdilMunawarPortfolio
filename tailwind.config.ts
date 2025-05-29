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
				'27': '6.75rem',
				'28': '7rem',
				'29': '7.25rem',
				'30': '7.5rem',
				'32': '8rem',
				'34': '8.5rem',
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
				'tech-glitter-1': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
					'20%': { opacity: '1', transform: 'scale(1.5) rotate(180deg)' },
					'40%': { opacity: '0.3', transform: 'scale(0.8) rotate(360deg)' },
					'60%': { opacity: '0.8', transform: 'scale(1.2) rotate(540deg)' },
					'80%': { opacity: '0.1', transform: 'scale(0.5) rotate(720deg)' }
				},
				'tech-glitter-2': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) translateX(0)' },
					'25%': { opacity: '0.8', transform: 'scale(1.3) translateX(10px)' },
					'50%': { opacity: '0.2', transform: 'scale(0.6) translateX(-5px)' },
					'75%': { opacity: '0.9', transform: 'scale(1.1) translateX(15px)' }
				},
				'tech-glitter-3': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) translateY(0)' },
					'30%': { opacity: '0.7', transform: 'scale(1.4) translateY(-8px)' },
					'60%': { opacity: '0.3', transform: 'scale(0.9) translateY(12px)' },
					'90%': { opacity: '0.6', transform: 'scale(1.1) translateY(-4px)' }
				},
				'tech-glitter-4': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg) skew(0deg)' },
					'15%': { opacity: '1', transform: 'scale(1.6) rotate(90deg) skew(10deg)' },
					'45%': { opacity: '0.4', transform: 'scale(0.7) rotate(270deg) skew(-5deg)' },
					'75%': { opacity: '0.8', transform: 'scale(1.3) rotate(450deg) skew(15deg)' }
				},
				'tech-glitter-5': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) translate(0, 0)' },
					'35%': { opacity: '0.9', transform: 'scale(1.2) translate(8px, -6px)' },
					'70%': { opacity: '0.2', transform: 'scale(0.8) translate(-10px, 8px)' }
				},
				'tech-glitter-6': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) rotateX(0deg)' },
					'40%': { opacity: '0.7', transform: 'scale(1.5) rotateX(180deg)' },
					'80%': { opacity: '0.3', transform: 'scale(0.9) rotateX(360deg)' }
				},
				'circuit-flow': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'circuit-flow-reverse': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(-100%)', opacity: '0' }
				},
				'circuit-flow-vertical': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0' }
				},
				'circuit-flow-vertical-reverse': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' }
				},
				'tech-pulse': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'25%': { opacity: '0.7', transform: 'scale(1.05)' },
					'50%': { opacity: '0.5', transform: 'scale(0.95)' },
					'75%': { opacity: '0.8', transform: 'scale(1.02)' }
				},
				'cursor-react-float': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'25%': { transform: 'translate(15px, -20px) rotate(5deg)' },
					'50%': { transform: 'translate(-10px, -30px) rotate(-3deg)' },
					'75%': { transform: 'translate(-20px, 15px) rotate(7deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'cursor-react-float-2': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'30%': { transform: 'translate(-25px, 10px) rotate(-4deg)' },
					'60%': { transform: 'translate(20px, -25px) rotate(6deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'cursor-react-float-3': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'20%': { transform: 'translate(18px, 22px) rotate(8deg)' },
					'70%': { transform: 'translate(-22px, -15px) rotate(-5deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'cursor-react-float-4': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'40%': { transform: 'translate(-15px, -28px) rotate(-7deg)' },
					'80%': { transform: 'translate(25px, 12px) rotate(4deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'cursor-react-float-5': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'35%': { transform: 'translate(22px, -18px) rotate(9deg)' },
					'75%': { transform: 'translate(-18px, 25px) rotate(-6deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'cursor-react-float-6': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'50%': { transform: 'translate(-20px, -20px) rotate(-8deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'collision-bounce-1': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'15%': { transform: 'translate(25px, -15px) scale(1.1)' },
					'30%': { transform: 'translate(-20px, 10px) scale(0.9)' },
					'45%': { transform: 'translate(30px, 20px) scale(1.15)' },
					'60%': { transform: 'translate(-15px, -25px) scale(0.85)' },
					'75%': { transform: 'translate(20px, -10px) scale(1.05)' },
					'90%': { transform: 'translate(-10px, 15px) scale(0.95)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' }
				},
				'collision-bounce-2': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'20%': { transform: 'translate(-30px, 20px) scale(1.2)' },
					'40%': { transform: 'translate(15px, -25px) scale(0.8)' },
					'60%': { transform: 'translate(-25px, -15px) scale(1.1)' },
					'80%': { transform: 'translate(20px, 25px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' }
				},
				'collision-bounce-3': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'25%': { transform: 'translate(35px, 15px) scale(1.15)' },
					'50%': { transform: 'translate(-20px, -30px) scale(0.85)' },
					'75%': { transform: 'translate(25px, -20px) scale(1.08)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' }
				},
				'collision-bounce-4': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'30%': { transform: 'translate(-25px, -20px) scale(1.12)' },
					'60%': { transform: 'translate(30px, 25px) scale(0.88)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' }
				},
				'collision-bounce-5': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'40%': { transform: 'translate(20px, -30px) scale(1.18)' },
					'80%': { transform: 'translate(-25px, 15px) scale(0.82)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' }
				},
				'collision-bounce-6': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'50%': { transform: 'translate(-30px, 30px) scale(1.2)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' }
				},
				'realistic-float-1': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'12%': { transform: 'translate(25px, -30px) rotate(8deg)' },
					'25%': { transform: 'translate(-15px, -45px) rotate(-5deg)' },
					'37%': { transform: 'translate(40px, -20px) rotate(12deg)' },
					'50%': { transform: 'translate(-30px, 10px) rotate(-8deg)' },
					'62%': { transform: 'translate(20px, 35px) rotate(6deg)' },
					'75%': { transform: 'translate(-25px, -10px) rotate(-10deg)' },
					'87%': { transform: 'translate(35px, -25px) rotate(4deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'realistic-float-2': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'15%': { transform: 'translate(-40px, 20px) rotate(-12deg)' },
					'30%': { transform: 'translate(30px, -35px) rotate(7deg)' },
					'45%': { transform: 'translate(-20px, 25px) rotate(-6deg)' },
					'60%': { transform: 'translate(45px, -15px) rotate(10deg)' },
					'75%': { transform: 'translate(-35px, -30px) rotate(-4deg)' },
					'90%': { transform: 'translate(15px, 40px) rotate(8deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'realistic-float-3': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'10%': { transform: 'translate(35px, 25px) rotate(9deg)' },
					'25%': { transform: 'translate(-25px, -40px) rotate(-7deg)' },
					'40%': { transform: 'translate(30px, 15px) rotate(11deg)' },
					'55%': { transform: 'translate(-40px, -20px) rotate(-5deg)' },
					'70%': { transform: 'translate(25px, -35px) rotate(6deg)' },
					'85%': { transform: 'translate(-15px, 30px) rotate(-9deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'realistic-float-4': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'20%': { transform: 'translate(-30px, -25px) rotate(-8deg)' },
					'35%': { transform: 'translate(40px, 30px) rotate(10deg)' },
					'50%': { transform: 'translate(-20px, 35px) rotate(-6deg)' },
					'65%': { transform: 'translate(35px, -40px) rotate(12deg)' },
					'80%': { transform: 'translate(-45px, 15px) rotate(-4deg)' },
					'95%': { transform: 'translate(20px, -20px) rotate(7deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'realistic-float-5': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'18%': { transform: 'translate(45px, -30px) rotate(11deg)' },
					'36%': { transform: 'translate(-35px, 25px) rotate(-9deg)' },
					'54%': { transform: 'translate(20px, -45px) rotate(5deg)' },
					'72%': { transform: 'translate(-40px, 30px) rotate(-7deg)' },
					'90%': { transform: 'translate(30px, 20px) rotate(8deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'realistic-float-6': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'14%': { transform: 'translate(-25px, 40px) rotate(-10deg)' },
					'28%': { transform: 'translate(35px, -20px) rotate(6deg)' },
					'42%': { transform: 'translate(-40px, -35px) rotate(-8deg)' },
					'56%': { transform: 'translate(30px, 25px) rotate(9deg)' },
					'70%': { transform: 'translate(-20px, -30px) rotate(-5deg)' },
					'84%': { transform: 'translate(40px, 35px) rotate(7deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'spin-reverse': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-360deg)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'progress-fill': {
					'0%': { width: '0%', opacity: '0.5' },
					'100%': { opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.8' }
				},
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
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
				'realistic-float-1': 'realistic-float-1 35s ease-in-out infinite',
				'realistic-float-2': 'realistic-float-2 42s ease-in-out infinite',
				'realistic-float-3': 'realistic-float-3 38s ease-in-out infinite',
				'realistic-float-4': 'realistic-float-4 45s ease-in-out infinite',
				'realistic-float-5': 'realistic-float-5 40s ease-in-out infinite',
				'realistic-float-6': 'realistic-float-6 47s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'spin-reverse': 'spin-reverse 15s linear infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'progress-fill': 'progress-fill 2s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gradient-x': 'gradient-x 3s ease infinite',
				'tech-glitter-1': 'tech-glitter-1 3s ease-in-out infinite',
				'tech-glitter-2': 'tech-glitter-2 2.5s ease-in-out infinite',
				'tech-glitter-3': 'tech-glitter-3 3.5s ease-in-out infinite',
				'tech-glitter-4': 'tech-glitter-4 2.8s ease-in-out infinite',
				'tech-glitter-5': 'tech-glitter-5 3.2s ease-in-out infinite',
				'tech-glitter-6': 'tech-glitter-6 2.7s ease-in-out infinite',
				'circuit-flow': 'circuit-flow 4s linear infinite',
				'circuit-flow-reverse': 'circuit-flow-reverse 4.5s linear infinite',
				'circuit-flow-vertical': 'circuit-flow-vertical 3.8s linear infinite',
				'circuit-flow-vertical-reverse': 'circuit-flow-vertical-reverse 4.2s linear infinite',
				'tech-pulse': 'tech-pulse 3s ease-in-out infinite',
				'cursor-react-float': 'cursor-react-float 20s ease-in-out infinite',
				'cursor-react-float-2': 'cursor-react-float-2 25s ease-in-out infinite',
				'cursor-react-float-3': 'cursor-react-float-3 22s ease-in-out infinite',
				'cursor-react-float-4': 'cursor-react-float-4 28s ease-in-out infinite',
				'cursor-react-float-5': 'cursor-react-float-5 24s ease-in-out infinite',
				'cursor-react-float-6': 'cursor-react-float-6 26s ease-in-out infinite',
				'collision-bounce-1': 'collision-bounce-1 18s ease-in-out infinite',
				'collision-bounce-2': 'collision-bounce-2 20s ease-in-out infinite',
				'collision-bounce-3': 'collision-bounce-3 22s ease-in-out infinite',
				'collision-bounce-4': 'collision-bounce-4 19s ease-in-out infinite',
				'collision-bounce-5': 'collision-bounce-5 21s ease-in-out infinite',
				'collision-bounce-6': 'collision-bounce-6 23s ease-in-out infinite'
			},
			textShadow: {
				'glow': '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			const newUtilities = {
				'.text-shadow-glow': {
					textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)'
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
