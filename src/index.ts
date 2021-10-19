import { generate } from "./md5";

export { generate } from "./md5";

export const MD5: IMD5 = {
    generate,
};

interface IMD5 {
    generate: (unicodeText: string) => string;
}
