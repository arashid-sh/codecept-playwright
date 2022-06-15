import SharedStore from './sharedStore';

class ContextProvider {
  private static instance: ContextProvider;
  private scenarioId: string;

  readonly sharedStore = new SharedStore();

  /**
   * Contructs a context provider instance
   * @constructor
   * @private
   * @param {string} scenarioId - the id of current test scenario
   */
  private constructor(scenarioId: string) {
    this.scenarioId = scenarioId;
  }

  /**
   * Returns the current or a new instance of the ContextProvider singleton.
   * The same instance will be reused until test scenario changes
   * @constructor
   * @param {string} scenarioId - the id of current test scenario
   */
  static getInstance(scenarioId: string): ContextProvider {
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

export default ContextProvider;
