export const isElectron = import.meta.env.MODE === 'electron'
export const isVSCode = location.protocol === 'vscode-webview:'
export const isLocalMode = isElectron || isVSCode

export const basePath = process.env.NODE_ENV === 'production' ? '/icones' : isVSCode ? window.baseURI : '/'
export const staticPath = process.env.NODE_ENV === 'production'
  ? '/icones'
  : isVSCode
    ? window.staticURI
    : (isElectron && import.meta.env.PROD) ? '../../app.asar/dist' : ''
