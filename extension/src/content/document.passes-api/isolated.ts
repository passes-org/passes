import { onRequestFromWindow } from '../../lib/messaging/content-scripts';
import { request } from '../content-ui/request/isolated';

onRequestFromWindow('request', async ({ request: req }) => {
  return request(req);
});

