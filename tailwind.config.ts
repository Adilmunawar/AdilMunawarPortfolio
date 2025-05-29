
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'cyber-cyan': '#00ffff',
        'cyber-blue': '#0080ff',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "tech-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "drift-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -30px) rotate(120deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(240deg)" }
        },
        "drift-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(-40px, -20px) rotate(-120deg)" },
          "66%": { transform: "translate(20px, 30px) rotate(-240deg)" }
        },
        "drift-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(25px, 15px) rotate(90deg)" },
          "66%": { transform: "translate(-30px, -25px) rotate(180deg)" }
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        "spin-slow-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        "cursor-react-float": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "25%": { transform: "translate(10px, -15px) rotate(5deg) scale(1.02)" },
          "50%": { transform: "translate(-5px, -25px) rotate(-3deg) scale(0.98)" },
          "75%": { transform: "translate(-15px, 10px) rotate(7deg) scale(1.01)" }
        },
        "cursor-react-float-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(-12px, 18px) rotate(-4deg) scale(1.03)" },
          "66%": { transform: "translate(8px, -20px) rotate(6deg) scale(0.97)" }
        },
        "cursor-react-float-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "20%": { transform: "translate(15px, 8px) rotate(3deg) scale(1.01)" },
          "40%": { transform: "translate(-10px, -12px) rotate(-5deg) scale(0.99)" },
          "60%": { transform: "translate(5px, 20px) rotate(2deg) scale(1.02)" },
          "80%": { transform: "translate(-8px, -15px) rotate(-4deg) scale(0.98)" }
        },
        "cursor-react-float-4": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(-20px, 15px) rotate(-8deg) scale(1.04)" }
        },
        "cursor-react-float-5": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "25%": { transform: "translate(18px, -10px) rotate(6deg) scale(0.96)" },
          "75%": { transform: "translate(-14px, 22px) rotate(-7deg) scale(1.03)" }
        },
        "cursor-react-float-6": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "40%": { transform: "translate(-25px, -18px) rotate(-9deg) scale(1.05)" },
          "80%": { transform: "translate(12px, 28px) rotate(4deg) scale(0.95)" }
        },
        "collision-bounce-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "10%": { transform: "translate(5px, -3px) rotate(2deg)" },
          "20%": { transform: "translate(-3px, 5px) rotate(-1deg)" },
          "30%": { transform: "translate(7px, 2px) rotate(3deg)" },
          "40%": { transform: "translate(-5px, -7px) rotate(-2deg)" },
          "50%": { transform: "translate(8px, -5px) rotate(4deg)" },
          "60%": { transform: "translate(-7px, 8px) rotate(-3deg)" },
          "70%": { transform: "translate(3px, -2px) rotate(1deg)" },
          "80%": { transform: "translate(-2px, 6px) rotate(-1deg)" },
          "90%": { transform: "translate(4px, -4px) rotate(2deg)" }
        },
        "collision-bounce-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "15%": { transform: "translate(-6px, 4px) rotate(-3deg)" },
          "30%": { transform: "translate(4px, -6px) rotate(2deg)" },
          "45%": { transform: "translate(-8px, -3px) rotate(-4deg)" },
          "60%": { transform: "translate(6px, 8px) rotate(3deg)" },
          "75%": { transform: "translate(-4px, -5px) rotate(-2deg)" },
          "90%": { transform: "translate(3px, 3px) rotate(1deg)" }
        },
        "collision-bounce-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "12%": { transform: "translate(7px, -2px) rotate(4deg)" },
          "25%": { transform: "translate(-5px, 7px) rotate(-3deg)" },
          "37%": { transform: "translate(3px, -8px) rotate(2deg)" },
          "50%": { transform: "translate(-8px, 5px) rotate(-5deg)" },
          "62%": { transform: "translate(6px, -3px) rotate(3deg)" },
          "75%": { transform: "translate(-3px, 6px) rotate(-2deg)" },
          "87%": { transform: "translate(2px, -4px) rotate(1deg)" }
        },
        "collision-bounce-4": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "20%": { transform: "translate(-4px, -6px) rotate(-2deg)" },
          "40%": { transform: "translate(8px, 3px) rotate(4deg)" },
          "60%": { transform: "translate(-6px, 8px) rotate(-3deg)" },
          "80%": { transform: "translate(5px, -5px) rotate(2deg)" }
        },
        "collision-bounce-5": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "16%": { transform: "translate(6px, 5px) rotate(3deg)" },
          "33%": { transform: "translate(-7px, -4px) rotate(-4deg)" },
          "50%": { transform: "translate(4px, 7px) rotate(2deg)" },
          "66%": { transform: "translate(-5px, -8px) rotate(-3deg)" },
          "83%": { transform: "translate(3px, 4px) rotate(1deg)" }
        },
        "collision-bounce-6": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "14%": { transform: "translate(-8px, 6px) rotate(-4deg)" },
          "28%": { transform: "translate(5px, -7px) rotate(3deg)" },
          "42%": { transform: "translate(-3px, 4px) rotate(-1deg)" },
          "57%": { transform: "translate(7px, -3px) rotate(4deg)" },
          "71%": { transform: "translate(-6px, -5px) rotate(-3deg)" },
          "85%": { transform: "translate(2px, 6px) rotate(1deg)" }
        },
        "drift-delayed-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(15px, -20px) rotate(90deg)" },
          "50%": { transform: "translate(-10px, -30px) rotate(180deg)" },
          "75%": { transform: "translate(-25px, 10px) rotate(270deg)" }
        },
        "drift-delayed-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "30%": { transform: "translate(-20px, 25px) rotate(-90deg)" },
          "60%": { transform: "translate(30px, 15px) rotate(-180deg)" },
          "90%": { transform: "translate(10px, -25px) rotate(-270deg)" }
        },
        "drift-delayed-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "20%": { transform: "translate(25px, 20px) rotate(72deg)" },
          "40%": { transform: "translate(-15px, 30px) rotate(144deg)" },
          "60%": { transform: "translate(-30px, -10px) rotate(216deg)" },
          "80%": { transform: "translate(10px, -30px) rotate(288deg)" }
        },
        "drift-delayed-4": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "35%": { transform: "translate(-25px, -15px) rotate(-120deg)" },
          "70%": { transform: "translate(20px, -25px) rotate(-240deg)" }
        },
        "drift-delayed-5": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "40%": { transform: "translate(30px, -20px) rotate(144deg)" },
          "80%": { transform: "translate(-20px, 25px) rotate(288deg)" }
        },
        "drift-delayed-6": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-30px, -30px) rotate(180deg)" }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        "exit": "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "tech-pulse": "tech-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "float-delayed": "float-delayed 3s ease-in-out infinite 0.5s",
        "drift-1": "drift-1 20s ease-in-out infinite",
        "drift-2": "drift-2 25s ease-in-out infinite",
        "drift-3": "drift-3 30s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-reverse": "spin-reverse 6s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 10s linear infinite",
        "cursor-react-float": "cursor-react-float 20s ease-in-out infinite",
        "cursor-react-float-2": "cursor-react-float-2 25s ease-in-out infinite",
        "cursor-react-float-3": "cursor-react-float-3 30s ease-in-out infinite",
        "cursor-react-float-4": "cursor-react-float-4 18s ease-in-out infinite",
        "cursor-react-float-5": "cursor-react-float-5 22s ease-in-out infinite",
        "cursor-react-float-6": "cursor-react-float-6 28s ease-in-out infinite",
        "collision-bounce-1": "collision-bounce-1 15s ease-in-out infinite",
        "collision-bounce-2": "collision-bounce-2 18s ease-in-out infinite",
        "collision-bounce-3": "collision-bounce-3 20s ease-in-out infinite",
        "collision-bounce-4": "collision-bounce-4 16s ease-in-out infinite",
        "collision-bounce-5": "collision-bounce-5 19s ease-in-out infinite",
        "collision-bounce-6": "collision-bounce-6 21s ease-in-out infinite",
        "drift-delayed-1": "drift-delayed-1 35s ease-in-out infinite",
        "drift-delayed-2": "drift-delayed-2 40s ease-in-out infinite",
        "drift-delayed-3": "drift-delayed-3 45s ease-in-out infinite",
        "drift-delayed-4": "drift-delayed-4 38s ease-in-out infinite",
        "drift-delayed-5": "drift-delayed-5 42s ease-in-out infinite",
        "drift-delayed-6": "drift-delayed-6 48s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
