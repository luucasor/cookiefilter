import Cookies from "universal-cookie"
const cookies = new Cookies()

export default class CookieService {

    public create(key: string, value: object) {
        cookies.set(key, value)
    }

    public read(key: string) {
        return cookies.get(key)
    }

    public update(key: string, value: object) {
        cookies.set(key, value)
    }

    public delete(key: string) {
        cookies.remove(key)
    }
}