import { awaitRequest } from './await-request';
import { sendResult } from './send-result';

/**
 * Namespace containing APIs for messaging between a requesting app and a Topic or Pass Provider.
 * @namespace Messaging
 */
export const Messaging = {
  awaitRequest,
  sendResult,
};