import { inject, provide, ref, Ref } from 'vue';
import { RequestTypeBuilder } from '../../../packages/reqs/src/main';
import { PassesABI } from '../../../packages/types/index';

type Store = {
  builder: RequestTypeBuilder<any, any>;
  dataPaneActiveTab: 'request' | 'result';
  passDriver: 'pass emulator' | 'document.passes';
  request: Uint8Array;
  requestPending: false;
  result?: Uint8Array;

  // Actions
  makeRequest: () => void;
  setResult: (res: Uint8Array) => void;
};

export function provideStore({ builder, request }: Pick<Store, 'builder' | 'request'>) {
  const resultPromiseResolver = ref<(v: Uint8Array) => void>();
  const resultPromise = ref<Promise<Uint8Array>>();

  const store = ref<Store>({
    builder,
    dataPaneActiveTab: 'request',
    passDriver: 'pass emulator',
    request,
    requestPending: false,
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

      this.builder.abi = this.passDriver === 'document.passes'
        ? document.passes
        : passEmulatorABI;
      
      this.builder.sendRequest(request);
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