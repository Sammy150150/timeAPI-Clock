const clockText = document.getElementById("clock");

// 1. Define the same-origin proxy path and parameters
//    Vercel rewrites /api/time -> https://timeapi.io/api/v1/time/current/zone
const url = '/api/time';
const params = {
  timezone: 'Asia/Jakarta'
};

// 2. Use URLSearchParams to safely format the query string
const queryString = new URLSearchParams(params).toString();

// 3. Combine them and make the request

async function getTime(){

  try{
    const response = await fetch(`${url}?${queryString}`)

    if(!response.ok){
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data.time);
    clockText.innerHTML = data.time;
  }
  catch(error){
    console.error(error);
  }
}

getTime();
