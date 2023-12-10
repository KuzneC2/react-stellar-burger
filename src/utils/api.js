import { url } from "./constants";
const testApi = res => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
};

export const gettingApiItems = async () => {
    const res = await fetch(`${url}`)
    return testApi(res)
}