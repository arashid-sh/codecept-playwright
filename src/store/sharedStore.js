class SharedStore {
  /**
   * Constructs the shared store
   * @constructor
   * @param {T} state
   */
  constructor(state = {}) {
    this._currentState = state;
  }
  /**
   * Returns a shallow copy of the current state to ensure imutabillity on first level
   * @returns {T} state
   */
  get state() {
    return Object.assign({}, this._currentState);
  }
  /**
   * Updates the state with the values passed as parameter
   * @param {T} updatedState
   */
  setState(updatedState) {
    this._currentState = Object.assign(
      Object.assign({}, this._currentState),
      updatedState
    );
  }
}
exports.default = SharedStore;
