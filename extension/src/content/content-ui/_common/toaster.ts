import { Toaster } from "../../../lib/toast";

let toaster: Toaster | undefined;
export function mountToaster() {
  if (!toaster) {
    toaster = new Toaster({ target: document.body, props: { position: 'top-right' } });
  }
}

export function destroyToaster() {
  toaster?.$destroy();
}