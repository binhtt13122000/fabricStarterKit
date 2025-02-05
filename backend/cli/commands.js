/**
 * test for our super fabric REST API
 */
const supertest = require("supertest");
const api = supertest("localhost:3000/api");
const util = require("util");
const invokeTimeout = 3000;

describe("Hyperledger fabricStarterKitAPI some tests", function () {
  /**
   * check if api is running
   */
  it("checks if api is running", async function () {
    //this.skip();
    let result = await api.get("/");
    console.log(result.body);
  });

  /**
   * create or update an asset
   */
  it("setData", async function () {
    //this.skip();
    this.timeout(invokeTimeout);
    let payload = {
      no: "a3",
      type: "Product number 1",
      content: "1",
      date: "3200",
    };
    let result = await api.post("/setData").send(payload);
    console.log(result.body);
  });

  /**
   * get details of an asset
   */
  it("getData", async function () {
    //this.skip();
    let key = "a3";
    let result = await api.get("/getData/" + key);
    console.log(result.body);
  });

  /**
   * delete an asset
   */
  it("delAsset", async function () {
    //this.skip();
    this.timeout(invokeTimeout);
    let key = "a3";
    let result = await api.get("/delAsset/" + key);
    console.log(result.body);
  });

  /**
   * get a list of all available asset
   */
  it("getAllAssets", async function () {
    //this.skip();
    let result = await api.get("/getAllAssets");
    console.log(util.inspect(result.body, { showHidden: false, depth: null }));
  });

  /**
   * get the history of an asset
   */
  it("getHistory", async function () {
    //this.skip();
    let key = "a1";
    let result = await api.get("/getHistory/" + key);
    console.log(util.inspect(result.body, { showHidden: false, depth: null }));
  });
});
