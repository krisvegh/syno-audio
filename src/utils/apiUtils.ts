export const callApi = (url: string, options: any) =>
  fetch(url, options)
    .then(
      response =>
        response.ok ? response.json() : Promise.reject(response.text()),
      error => Promise.reject(error)
    )
    .catch(error => ({ error }));
