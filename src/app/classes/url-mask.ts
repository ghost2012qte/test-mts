export class UrlMask {

    mask: Record<string, string | number> = {};

    constructor(private defaults:Record<string, string> = {}) {}

    setDefault(key: string, val: string | number) {
        this.defaults[key] = val.toString();
    }

    setKey(key: string, val: string | number) {
        val = val.toString();
        if (this.defaults[key] === val) {
            delete this.mask[key];
        }
        else {
            this.mask[key] = val;
        }
    }

    setKeys(data: Record<string, string | number>) {
        for (let key in data) {
            this.setKey(key, data[key]);
        }
    }

}