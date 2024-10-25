import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
    registerType: "autoUpdate",
    workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    },
    includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
    manifest: {
        name: "Alok | ScreenSaver",
        short_name: "Alok | ScreenSaver",
        description: "I am a simple vite app",
        icons: [
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "favicon",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "favicon",
            },
            {
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
                purpose: "apple touch icon",
            },
            {
                src: "/maskable_icon.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable",
            },
        ],
        theme_color: "#171717",
        background_color: "#e3e3e3",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "landscape",
    },
};

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugIn)],
});
