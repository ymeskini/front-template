/// <reference types="vite/client" />
// cf. https://vitejs.dev/guide/env-and-mode.html

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
