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
  setEmulatorResult: (bytes: Uint8Array) => Promise<void>;

  // Private
  _emulatorResultPromiseResolver?: (result: Uint8Array) => void;
};

export function provideStore({ requestBody, requestType }: Pick<Store, 'requestBody' | 'requestType'>) {
  const store = ref<Store>({
    abi: 'emulator',
    dataPaneActiveTab: 'request',
    requestBody,
    requestPending: false,
    requestType,
    result: undefined,

    async makeRequest() {
      const passEmulatorABIRequest = async (raw: Uint8Array) => {
        const resultPromise = new Promise<Uint8Array>((resolve) => { this.emulatorResultPromiseResolver = resolve; });
        return resultPromise;
      };
      const passEmulatorABI: PassesABI = { request: passEmulatorABIRequest };

      this.requestType.abi = this.abi === 'document.passes'
        ? document.passes
        : passEmulatorABI;
      
      this.requestPending = true;
      this.result = undefined;
      console.log('about to send request with abi', this.abi);
      this.result = await this.requestType.sendRequest(requestBody);
      console.log('result', this.result);
      this.requestPending = false;
      this.dataPaneActiveTab = 'result';
    },
    async setEmulatorResult(bytes: Uint8Array) {
      if (!this.emulatorResultPromiseResolver) throw new Error('emulatorResultPromiseResolver was undefined');
      this.emulatorResultPromiseResolver(bytes);
      return;
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