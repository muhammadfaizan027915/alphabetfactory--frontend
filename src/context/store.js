import { createContext, useState } from "react";

export const AppContext = createContext({
  question: [],
  accept: [],
  slidesName: [],
  selectedSlide: [],
});

const slidesName = [
  "cover",
  "introduction",
  "the proposal",
  "plan of action",
  "investment",
  "about us",
  "contact",
  "reviews",
  "corporate video",
  "closing",
];

export default function ContextProvider({ children }) {
  const global = {
    question: useState(false),
    accept: useState(false),
    slidesName: slidesName,
    selectedSlide: useState("cover"),
  };

  return <AppContext.Provider value={global}>{children}</AppContext.Provider>;
}
