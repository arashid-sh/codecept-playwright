const sharedStore = require('./sharedStore');
class ContextProvider {
  /**
   * Contructs a context provider instance
   * @constructor
   * @private
   * @param {string} scenarioId - the id of current test scenario
   */
  constructor(scenarioId) {
    this.sharedStore = new sharedStore.default();
    this.scenarioId = scenarioId;
  }
  /**
   * Returns the current or a new instance of the ContextProvider singleton.
   * The same instance will be reused until test scenario changes
   * @constructor
   * @param {string} scenarioId - the id of current test scenario
   */
  static getInstance(scenarioId) {
    if (
      ContextProvider.instance &&
      ContextProvider.instance.scenarioId === scenarioId
    ) {
      return ContextProvider.instance;
    }
    ContextProvider.instance = new ContextProvider(scenarioId);
    return ContextProvider.instance;
  }
}
exports.default = ContextProvider;
