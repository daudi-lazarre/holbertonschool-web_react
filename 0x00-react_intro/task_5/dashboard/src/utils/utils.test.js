import { getFullYear, getFooterCopy, getLatestNotification } from "./utils"
describe("getFullYear", () => {
    it("Verify returns the right year", () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});

describe("getFooterCopy", () => {
    it("Verify when passed true", () => {
        expect(getFooterCopy(true)).toEqual("Holberton School");
    });

    it("When passed false", () => {
        expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
});

describe("getLatestNotification", () => {
    it("Verify return statement is correct", () => {
        expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
});
