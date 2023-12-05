/**
   * Submits a POST request with the provided form data to the provided url. 
   * Under the hood, this uses a hidden form that's temporarily added to the DOM until it's submitted.
   * 
   * @param {string} url 
   * @param {FormData} formData 
   * @returns {Window} (the opened window)
   */
export function openWindowWithPost(url, formData) {
  // Open a new window
  const target = crypto.randomUUID();
  const newWin = window.open('', target);
  if (!newWin) throw new Error('Failed to open new window for POST');

  // Create a form dynamically
  const form = document.createElement('form');
  form.action = url;
  form.method = 'POST';
  form.enctype = 'multipart/form-data';
  form.target = target;

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

  return newWin;
}