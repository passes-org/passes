import toast from './core/toast';
export type {
	ToastOptions,
	ToastPosition,
	Toast,
	Renderable,
	ValueOrFunction,
	ToasterProps,
	DefaultToastOptions,
	IconTheme,
	ToastType,
	ValueFunction
} from './core/types';

export { default as useToaster } from './core/use-toaster';
export { useToasterStore } from './core/store';
export { default as ToastBar } from './components/ToastBar.svelte';
export { default as ToastIcon } from './components/ToastIcon.svelte';
export { default as Toaster } from './components/Toaster.svelte';
export { default as CheckmarkIcon } from './components/CheckmarkIcon.svelte';
export { default as ErrorIcon } from './components/ErrorIcon.svelte';
export { default as LoaderIcon } from './components/LoaderIcon.svelte';
export { resolveValue } from './core/types';

export { toast };
export default toast;
