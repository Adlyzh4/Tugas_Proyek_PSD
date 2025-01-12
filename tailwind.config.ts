import { withUt } from "uploadthing/tw";

export default withUt({
  // Your existing Tailwind config
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989FF",
        topHeadingPrimary: "#010f1c",
        topHeadingSecondary: "#021d35",
        pink: "#FD4B6B"
      },

      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
});

