export {};

declare global {
  const ENV: "production" | "develop";

  interface Window {
    playVideo: () => void;
  }
}
