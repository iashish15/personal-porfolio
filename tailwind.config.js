export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        glow: "0 30px 80px rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(99, 102, 241, 0.24), transparent 28%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.18), transparent 22%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseShift: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseShift: "pulseShift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
