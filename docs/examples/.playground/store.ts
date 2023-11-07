import { inject, provide, ref, Ref } from 'vue';
import { RequestBuilder } from '../../../packages/reqs/src/main';

type Store = {
  builder: RequestBuilder<any, any>;
  dataPaneActiveTab: 'request' | 'result';
  emulatorPaneDriver: 'emulator' | 'document.passes';
  request: Uint8Array;
  requestPending: false;
  result?: Uint8Array;

  // Actions
  makeRequest: () => void;
  setResult: (res: Uint8Array) => void;
};

export function provideStore({ builder, request }: Pick<Store, 'builder' | 'request'>) {
  const store = ref<Store>({
    builder,
    dataPaneActiveTab: 'request',
    emulatorPaneDriver: 'emulator',
    request,
    requestPending: false,
    result: undefined,

    makeRequest() {
      this.requestPending = true;
    },
    setResult(res: any) {
      this.requestPending = false;
      this.result = this.builder.resultCodec.encode(res);
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