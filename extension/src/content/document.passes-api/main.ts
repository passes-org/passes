import { sendRequestToWindow } from "../../lib/messaging/content-scripts";

document.passes = {
  async request(request) {
    return sendRequestToWindow('request', {
      request,
    });
  },
};
