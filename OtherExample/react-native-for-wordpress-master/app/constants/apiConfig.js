// Change YOUR_API_KEY_HERE to your apiKey
import {clientConfig} from './clientConfig';

const url = clientConfig.PostUrlEmbed;

export async function getBlogFetch() {
  let result = await fetch(url).then(response => response.json());
  // console.log(result);
  return result;
}

