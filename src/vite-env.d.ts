/// <reference types="vite/client" />



interface ImportMetaEnv {
    readonly VITE_GITHUB_TOKEN: string;
    // add other variables here...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }