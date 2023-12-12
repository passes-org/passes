import { awaitRequest } from './await-request.js';
import { sendResult } from './send-result.js';

/**
 * Namespace containing APIs for messaging between a requesting app and a Topic or Pass Provider.
 * @namespace Messaging
 */
export const Messaging = {
  awaitRequest,
  sendResult,
};