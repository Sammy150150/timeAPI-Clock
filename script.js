// 1. Define the same-origin proxy path and parameters
//    Vercel rewrites /api/time -> https://timeapi.io/api/v1/time/current/zone
const url = '/api/time';
const params = {
  timezone: 'Asia/Jakarta'
};

// 2. Use URLSearchParams to safely format the query string
const queryString = new URLSearchParams(params).toString();

// 3. Combine them and make the request
fetch(`${url}?${queryString}`)
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
