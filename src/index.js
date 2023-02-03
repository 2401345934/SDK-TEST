const INIT_OPTIONS = {
  project_name: "MHSDK",
  project_id: "xxx",
  interceptPromiseError: true,
  interceptJSError: true,
  isFirstScreenLoading: true,
}


function handleErr (msg, url, l) {
  let txt = ""
  txt = "There was an error on this page.\n\n"
  txt += "Error: " + msg + "\n"
  txt += "URL: " + url + "\n"
  txt += "Line: " + l + "\n\n"
  txt += "Click OK to continue.\n\n"
  console.error(txt)
  return true
}

class MHSDK {
  // options 参数
  // project_name: 项目名称
  // project_id: 项目id
  // interceptPromiseError: 是否拦截promise错误
  // interceptJSError: 是否拦截js错误
  constructor() {}

  static interceptPromiseError () {

     // 或者
    window.onunhandledrejection = function(err) {
      console.error(err.reason)
      return true;
    }
  }
  static interceptJSError () {
    window.onerror = handleErr;
  }

  static init (options = {}) {
    const mergerOptions = {
      ...INIT_OPTIONS,
      ...options,
    }

    // 拦截promise错误
    if (mergerOptions.interceptPromiseError) {
      MHSDK.interceptPromiseError()
    }
    // 拦截js错误
    if (mergerOptions.interceptJSError) {
      MHSDK.interceptJSError()
    }

    return "success"
  }
}

export default {
  MHSDK,
}