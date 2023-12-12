import { inject, provide, ref, Ref } from 'vue';
import { IRequestTopic, PassesABI, RequestResult, SignedRequestResult } from '../../../packages/reqs/src/main';

type Store = {
  abi: 'emulator' | 'document.passes';
  dataPaneActiveTab: 'request' | 'result';
  requestBody: any;
  requestPending: false;
  requestTopic: IRequestTopic<any, any>;
  result?: RequestResult<any> | SignedRequestResult<any>;

  // Actions
  makeRequest: () => Promise<void>;
  setEmulatorResult: (bytes: Uint8Array) => Promise<void>;

  // Private
  _emulatorResultPromiseResolver?: (result: Uint8Array) => void;
};

export function provideStore({ requestBody, requestTopic }: Pick<Store, 'requestBody' | 'requestTopic'>) {
  const store = ref<Store>({
    abi: 'emulator',
    dataPaneActiveTab: 'request',
    requestBody,
    requestPending: false,
    requestTopic,
    result: undefined,

    async makeRequest() {
      const passEmulatorABIRequest = async (raw: Uint8Array) => {
        const resultPromise = new Promise<Uint8Array>((resolve) => { this.emulatorResultPromiseResolver = resolve; });
        return resultPromise;
      };
      const passEmulatorABI: PassesABI = { request: passEmulatorABIRequest };

      this.requestTopic.abi = this.abi === 'document.passes'
        ? document.passes
        : passEmulatorABI;
      
      this.requestPending = true;
      this.result = undefined;
      console.log('about to send request with abi', this.abi);
      this.result = await this.requestTopic.sendRequest(requestBody);
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