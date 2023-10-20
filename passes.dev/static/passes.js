// passes.js/constants.ts
var PASSES_BASE_URL = "https://danscan-passes-dev.ngrok.dev";

// passes.js/utils.ts
function openWindowWithPost(url, formData) {
  const target = crypto.randomUUID();
  const newWin = window.open("", target);
  const form = document.createElement("form");
  form.action = url;
  form.method = "POST";
  form.enctype = "multipart/form-data";
  form.target = target;
  formData.forEach((value, key) => {
    if (value instanceof File) {
      const input = document.createElement("input");
      input.type = "file";
      input.name = key;
      const dataTransfer = new DataTransfer;
      dataTransfer.items.add(value);
      input.files = dataTransfer.files;
      form.appendChild(input);
    } else {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }
  });
  document.body.appendChild(form);
  setTimeout(() => {
    form.submit();
    document.body.removeChild(form);
  }, 100);
  return newWin;
}
function getRequestTag(request) {
  const tagBegin = 2;
  const tagLength = (request.at(1) ?? 0) + 1;
  const tagEnd = tagBegin + tagLength;
  const tagBytes = request.slice(2, tagEnd);
  return new TextDecoder().decode(tagBytes);
}
function getRequestBody(request) {
  const tagBegin = 2;
  const tagLength = (request.at(1) ?? 0) + 1;
  const tagEnd = tagBegin + tagLength;
  const bodyBytes = request.slice(tagEnd);
  return bodyBytes;
}

// passes.js/request-tag-support/passesDevV1SetPassEngine.ts
function support(request) {
  const { uri } = JSON.parse(decoder.decode(getRequestBody(request)));
  const confirmURL = `${PASSES_BASE_URL}/v1/set-pass-engine?${new URLSearchParams({ url: uri })}`;
  const confirmWindow = window.open(confirmURL);
  let resolveResultPromise;
  const resultPromise = new Promise((resolve) => {
    resolveResultPromise = resolve;
  });
  function handleMessage(event) {
    const message = event.data;
    if (event.source !== confirmWindow)
      return;
    if (message.type !== "request-result")
      return;
    resolveResultPromise(message.result);
    confirmWindow.close();
  }
  window.addEventListener("message", handleMessage);
  confirmWindow.addEventListener("close", () => window.removeEventListener("message", handleMessage));
  return resultPromise;
}
var REQUEST_TAG = "https://passes.dev/v1/set-pass-engine";
var decoder = new TextDecoder;

// passes.js/request-tag-support/index.ts
var SUPPORTED_REQUEST_TAGS = {
  [REQUEST_TAG]: support
};

// passes.js/polyfill-request.ts
async function request(raw) {
  const requestTag = getRequestTag(raw);
  const builtinSupportFn = SUPPORTED_REQUEST_TAGS[requestTag];
  if (builtinSupportFn) {
    return builtinSupportFn(raw);
  }
  const formData = new FormData;
  formData.set("request", new Blob([raw]));
  const passEngineWindow = openWindowWithPost(`${PASSES_BASE_URL}/v1/request`, formData);
  let resolveResultPromise;
  const resultPromise = new Promise((resolve) => {
    resolveResultPromise = resolve;
  });
  function handleMessage(event) {
    const message = event.data;
    if (event.source !== passEngineWindow)
      return;
    if (message.type !== "request-result")
      return;
    resolveResultPromise(message.result);
    passEngineWindow.close();
  }
  window.addEventListener("message", handleMessage);
  passEngineWindow.addEventListener("close", () => window.removeEventListener("message", handleMessage));
  return resultPromise;
}

// passes.js/index.ts
var isPassesSupported = function() {
  return typeof document.passes !== "undefined" && typeof document.passes.request === "function";
};
if (!isPassesSupported()) {
  document.passes = { request };
}
