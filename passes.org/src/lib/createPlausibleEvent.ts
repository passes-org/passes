type PlausibleEvent = {
  /** The domain of the Plausible site associated with the event */
  domain?: string;
  /** Headers associated with the event */
  headers: Headers;
  /** The event name */
  name: string;
  /** Custom properties for the event */
  props?: Record<string, unknown>;
  /** Any revenue associated with the event */
  revenue?: { currency: string; amount: number | string; };
  /** The event URL */
  url: string;
};

/** Sends an event to Plausible */
export async function createPlausibleEvent({
  domain = 'passes.org',
  headers,
  name,
  props,
  revenue,
  url,
}: PlausibleEvent) {
  try {
    const response = await fetch('https://plausible.io/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': headers.get('User-Agent') ?? '',
        'X-Forwarded-For': headers.get('X-Forwarded-For') ?? '',
      },
      body: JSON.stringify({
        domain,
        name,
        props,
        referrer: headers.get('Referer') ?? undefined,
        revenue,
        url,
      }),
    });
  
    if (!response.ok) {
      console.warn(`Failed to track Plausible event "${name}" with status ${response.status}`);
    } else {
      console.log(`Sent Plausible event "${name}" with props`, props);
    }
  } catch (error) {
    console.warn(`Failed to track Plausible event "${name}" with error`, error);
  }
}