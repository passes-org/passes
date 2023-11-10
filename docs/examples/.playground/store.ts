import { inject, provide, ref, Ref } from 'vue';
import { RequestType } from '../../../packages/reqs/src/main';
import { PassesABI } from '../../../packages/types/index';

type Store = {
  abi: 'emulator' | 'document.passes';
  dataPaneActiveTab: 'request' | 'result';
  request: Uint8Array;
  requestPending: false;
  requestType: RequestType<any, any>;
  result?: Uint8Array;

  // Actions
  makeRequest: () => void;
  setResult: (res: Uint8Array) => void;
};

export function provideStore({ request, requestType }: Pick<Store, 'request' | 'requestType'>) {
  const resultPromiseResolver = ref<(v: Uint8Array) => void>();
  const resultPromise = ref<Promise<Uint8Array>>();

  const store = ref<Store>({
    abi: 'emulator',
    dataPaneActiveTab: 'request',
    request,
    requestPending: false,
    requestType,
    result: undefined,

    makeRequest() {
      const passEmulatorABIRequest = (raw: Uint8Array) => {
        resultPromise.value
        this.request = raw;
        this.requestPending = true;
        resultPromise.value = new Promise((resolve) => { resultPromiseResolver.value = resolve })
        return resultPromise.value;
      };
      const passEmulatorABI: PassesABI = { request: passEmulatorABIRequest };

      this.requestType.abi = this.abi === 'document.passes'
        ? document.passes
        : passEmulatorABI;
      
      this.requestType.sendRequest(request);
    },
    setResult(res: Uint8Array) {
      this.requestPending = false;
      this.result = res;
      this.dataPaneActiveTab = 'result';
    },
  });

  provide('store', store);

  return store;
}

export function useStore() {
  const store = inject<Ref<Store>>('store');
  if (!store) throw new Error('Store was undefined. Ensure `provideStore` is called from the root component');
  return store;
}