/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,md,mdx,jsx,ts,tsx,vue,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              fontSize: "2rem",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              lineHeight: "1.3",
              marginTop: "0",
              marginBottom: "1rem",
              color: "hsl(26, 7%, 19%)",
            },
            h3: {
              fontSize: "1.75rem",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              lineHeight: "1.3",
              marginTop: "0",
              marginBottom: "0.75rem",
              color: "hsl(26, 7%, 19%)",
            },
            h4: {
              fontSize: "1.5rem",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              lineHeight: "1.3",
              marginTop: "0",
              marginBottom: "0.75rem",
              color: "hsl(26, 7%, 19%)",
            },
            p: {
              fontSize: "1.125rem",
              fontWeight: "400",
              letterSpacing: "-0.2px",
              lineHeight: "1.5",
              marginTop: "0",
              marginBottom: "1rem",
              color: "hsl(30, 3%, 28%)",
            },
            hr: {
              border: "none",
              height: "1px",
              width: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            },
            li: {
              fontSize: "1.125rem",
              fontWeight: "400",
              letterSpacing: "-0.2px",
              lineHeight: "1.5",
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
              color: "hsl(30, 3%, 28%)",
            },
            blockquote: {
              borderLeftColor: "hsl(0, 1%, 75%)",
              borderLeftStyle: "solid",
              borderLeftWidth: "4px",
              marginTop: "1.125rem",
              marginBottom: "1.125rem",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
            },
            strong: {
              color: "hsl(30, 3%, 28%)",
              fontWeight: "800",
            },
          },
        },
        dark: {
          css: {
            h2: {
              color: "hsl(0, 0%, 100%)",
            },
            h3: {
              color: "hsl(0, 0%, 100%)",
            },
            h4: {
              color: "hsl(0, 0%, 100%)",
            },
            blockquote: {
              borderLeftColor: "hsl(30, 3%, 28%)",
            },
            p: {
              color: "hsl(0, 1%, 75%)",
            },
            li: {
              color: "hsl(0, 1%, 75%)",
            },
            strong: {
              color: "hsl(0, 1%, 75%)",
            },
          },
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        "neutral-0": "hsl(0, 0%, 100%)",
        "neutral-100": "hsl(30, 33%, 98%)",
        "neutral-200": "hsl(30, 11%, 93%)",
        "neutral-300": "hsl(30, 6%, 86%)",
        "neutral-400": "hsl(0, 1%, 75%)",
        "neutral-600": "hsl(30, 3%, 28%)",
        "neutral-700": "hsl(26, 7%, 19%)",
        "neutral-800": "hsl(20, 5%, 12%)",
        "neutral-900": "hsl(20, 6%, 10%)",

        "blue-200": "hsl(207, 94%, 94%)",
        "blue-500": "hsl(206, 95%, 78%)",
        "blue-700": "hsl(206, 61%, 66%)",
        "blue-800": "hsl(206, 45%, 55%)",
        "blue-900": "hsl(206, 95%, 15%)",

        "green-200": "hsl(125, 38%, 94%)",
        "green-500": "hsl(133, 38%, 72%)",
        "green-700": "hsl(142, 100%, 26%)",
        "green-900": "hsl(133, 38%, 12%)",

        "yellow-200": "hsl(40, 100%, 94%)",
        "yellow-500": "hsl(39, 93%, 73%)",
        "yellow-700": "hsl(38, 95%, 47%)",
        "yellow-900": "hsl(38, 92%, 15%)",

        "red-400": "hsl(4, 86%, 58%)",
        "red-600": "hsl(4, 74%, 49%)",
      },
      fontSize: {
        preset1: "2.5rem",
        preset2: "2rem",
        preset3: "1.75rem",
      },
      letterSpacing: {
        "ls-xl": "-1px",
        "ls-md": "-0.5px",
        "ls-sm": "-0.4px",
        "ls-xs": "-0.2px",
      },
      borderRadius: {
        "rd-sm": "10px",
      },
      backgroundImage: (theme) => ({
        "pattern-dark-mode": "('/public/images/pattern-dark.svg')",
        "pattern-light-mode": "('/public/images/pattern-light.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
