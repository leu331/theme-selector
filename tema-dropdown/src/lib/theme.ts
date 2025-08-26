import { createSystem, defaultConfig, defineConfig, defineRecipe } from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      solid: {
        bg: "{primary.500.light}",
        color: "{white.light}",
        borderRadius: "full",
        _hover: { bg: "{primary.600.light}" },
      },
      outline: {
        borderColor: "{primary.400.light}",
        color: "{primary.400.light}",
        borderRadius: "full",
        _hover: { bg: "{primary.400.light}", color: "{white.light}" },
      },
      plain: {
        bg: "transparent",
        borderRadius: "none",
        color: "{primary.500.light}",
        textDecoration: "underline",
        _hover: { fontWeight: "bold" },
      },
    },
  },
});

const selectRecipe = defineRecipe({
  variants: {
    variant: {
      solid: {
        bg: "{primary.500.light}",
        color: "{white.light}",
        borderRadius: "full",
        _hover: { bg: "{primary.600.light}" },
      },
      outline: {
        borderColor: "{primary.400.light}",
        color: "{primary.400.light}",
        borderRadius: "full",
        _hover: { bg: "{primary.400.light}", color: "{white.light}" },
      },
      plain: {
        bg: "transparent",
        borderRadius: "none",
        color: "{primary.500.light}",
        textDecoration: "underline",
        _hover: { fontWeight: "bold" },
      },
    },
  },
});

const tokens = {
  colors: {
    "primary.50.light": { value: "#e3f2fd" },
    "primary.100.light": { value: "#bbdefb" },
    "primary.200.light": { value: "#90caf9" },
    "primary.300.light": { value: "#64b5f6" },
    "primary.400.light": { value: "#42a5f5" },
    "primary.500.light": { value: "#2196f3" },
    "primary.600.light": { value: "#1e88e5" },
    "primary.700.light": { value: "#1976d2" },
    "primary.800.light": { value: "#1565c0" },
    "primary.900.light": { value: "#0d47a1" },

    "primary.50.dark": { value: "#0d1a33" },
    "primary.100.dark": { value: "#1a2d66" },
    "primary.200.dark": { value: "#3352cc" },
    "primary.300.dark": { value: "#4d7bff" },
    "primary.400.dark": { value: "#6699ff" },
    "primary.500.dark": { value: "#99bbff" },
    "primary.600.dark": { value: "#b3ccff" },
    "primary.700.dark": { value: "#ccdfff" },
    "primary.800.dark": { value: "#e6f2ff" },
    "primary.900.dark": { value: "#f2f8ff" },

    "white.light": { value: "#ffffff" },
    "white.dark": { value: "#000000" },
    "black.light": { value: "#000000" },
    "black.dark": { value: "#ffffff" },
  },
  fonts: {
    heading: { value: "Inter, sans-serif" },
    body: { value: "Inter, sans-serif" },
  },
};

const globalCss = {
  ":root": { colorScheme: "light !important" },
  "*": { boxSizing: "border-box" },
  html: { height: "100%", overflow: "auto" },
  body: {
    minHeight: "100dvh",
    backgroundColor: "{white.light}",
    color: "{primary.500.light}",
    fontFamily: "body",
    margin: 0,
    padding: 0,
    overflow: "auto",
  },
  "#__next": { display: "flex", flexDirection: "column", minHeight: "100dvh" },
  h1: {
    color: "{primary.900.light}",
    fontFamily: "heading",
  },
};

const customConfig = defineConfig({
  theme: {
    tokens,
    recipes: { button: buttonRecipe, select: selectRecipe },
  },
  globalCss,
});

export const system = createSystem(defaultConfig, customConfig);
