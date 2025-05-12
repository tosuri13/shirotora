import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#00A384",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
