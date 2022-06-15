type State = {
  readonly [key: string]: unknown;
};

class SharedStore {
  private _currentState: State;

  /**
   * Constructs the shared store
   * @constructor
   * @param {T} state
   */
  constructor(state: State = {}) {
    this._currentState = state;
  }

  /**
   * Returns a shallow copy of the current state to ensure imutabillity on first level
   * @returns {T} state
   */
  get state(): State {
    return {
      ...this._currentState,
    };
  }

  /**
   * Updates the state with the values passed as parameter
   * @param {T} updatedState
   */
  setState(updatedState: State): void {
    this._currentState = {
      ...this._currentState,
      ...updatedState,
    };
  }
}

export default SharedStore;