export function postToIframe(iframeName: string, url: string, formData: FormData) {
  // Create a form dynamically
  const form = document.createElement('form');
  form.action = url;
  form.method = 'POST';
  form.enctype = 'multipart/form-data';
  form.target = iframeName;

  // Append FormData entries as form inputs
  formData.forEach((value, key) => {
    if (value instanceof File) {
      const input = document.createElement('input');
      input.type = 'file';
      input.name = key;

      // Simulate a user-selected file using a DataTransfer object
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(value);
      input.files = dataTransfer.files;

      form.appendChild(input);
    } else {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }
  });

  // Append the form to the body
  document.body.appendChild(form);

  // Submit the form
  setTimeout(() => {
    form.submit();
    // Remove the form from the body (cleanup)
    document.body.removeChild(form);
  }, 100);
}

export function getRequestTag(request: Uint8Array): string {
  const tagBegin = 2;
  const tagLength = (request.at(1) ?? 0) + 1;
  const tagEnd = tagBegin + tagLength;
  const tagBytes = request.slice(2, tagEnd);
  return new TextDecoder().decode(tagBytes);
}

export function getRequestBody(request: Uint8Array): Uint8Array {
  const tagBegin = 2;
  const tagLength = (request.at(1) ?? 0) + 1;
  const tagEnd = tagBegin + tagLength;
  const bodyBytes = request.slice(tagEnd);
  return bodyBytes;
}
