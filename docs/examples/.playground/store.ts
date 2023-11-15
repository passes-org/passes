import { inject, provide, ref, Ref } from 'vue';
import { IRequestType, RequestResult, SignedRequestResult } from '../../../packages/reqs/src/main';
import { PassesABI } from '../../../packages/types/index';

type Store = {
  abi: 'emulator' | 'document.passes';
  dataPaneActiveTab: 'request' | 'result';
  requestBody: any;
  requestPending: false;
  requestType: IRequestType<any, any>;
  result?: RequestResult<any> | SignedRequestResult<any>;

  // Actions
  makeRequest: () => Promise<void>;
  setResult: (bytes: Uint8Array) => Promise<void>;
};

export function provideStore({ requestBody, requestType }: Pick<Store, 'requestBody' | 'requestType'>) {
  const resultPromiseResolver = ref<(v: Uint8Array) => void>();
  const resultPromise = ref<Promise<Uint8Array>>();

  const store = ref<Store>({
    abi: 'emulator',
    dataPaneActiveTab: 'request',
    requestBody,
    requestPending: false,
    requestType,
    result: undefined,

    async makeRequest() {
      const passEmulatorABIRequest = async (raw: Uint8Array) => {
        resultPromise.value
        this.requestBody = await this.requestType.decodeRequest(raw);
        this.requestPending = true;
        resultPromise.value = new Promise((resolve) => { resultPromiseResolver.value = resolve })
        return resultPromise.value;
      };
      const passEmulatorABI: PassesABI = { request: passEmulatorABIRequest };

      this.requestType.abi = this.abi === 'document.passes'
        ? document.passes
        : passEmulatorABI;
      
      this.requestType.sendRequest(requestBody);
    },
    async setResult(bytes: Uint8Array) {
      this.requestPending = false;
      this.result = await this.requestType.decodeResult(bytes);
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