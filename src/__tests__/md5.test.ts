import { MD5 } from "../index";

test("Generate", () => {
    expect(MD5.generate("fvp-_few0dew^&FE^Efew")).toBe("c506d2415e8713a6b04c1f2b51daf9b5");
    expect(MD5.generate("cds&9_+c")).toBe("2b238ea99aff5f0696eed9d3f6247320");
});
