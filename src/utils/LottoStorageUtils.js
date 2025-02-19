const lottoKey = "lottoSelection";
export const LottoStorageUtils = {
  getItem() {
    try {
      //Get value from Local Storage & parse it to Array
      let lottoStr = localStorage.getItem(lottoKey);
      let lottoSelection = lottoStr ? JSON.parse(lottoStr) : [];

      if (!Array.isArray(lottoSelection)) {
        throw new Error("No Array value stored");
      }
      return lottoSelection;
    } catch (error) {
      console.error("Error getting value from Local Storage:", error);
      return [];
    }
  },
  setItem(value) {
    try {
      //Stringify & store the value in Local Storage
      localStorage.setItem(lottoKey, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting value in Local Storage:", error);
    }
  },
};
