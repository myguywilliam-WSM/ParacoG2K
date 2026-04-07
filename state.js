// Shared state engine using localStorage + BroadcastChannel for cross-tab sync
const STATE_KEY = 'paraco_trivia_state';
const CHANNEL_NAME = 'paraco_trivia';

const GameState = {
  _channel: null,
  _listeners: [],

  init() {
    this._channel = new BroadcastChannel(CHANNEL_NAME);
    this._channel.onmessage = (e) => {
      if (e.data && e.data.type === 'STATE_UPDATE') {
        this._notify(e.data.state);
      }
    };
  },

  get() {
    try {
      const raw = localStorage.getItem(STATE_KEY);
      return raw ? JSON.parse(raw) : this.defaultState();
    } catch {
      return this.defaultState();
    }
  },

  set(updates) {
    const current = this.get();
    const next = { ...current, ...updates, updatedAt: Date.now() };
    localStorage.setItem(STATE_KEY, JSON.stringify(next));
    if (this._channel) {
      this._channel.postMessage({ type: 'STATE_UPDATE', state: next });
    }
    this._notify(next);
    return next;
  },

  reset() {
    const fresh = this.defaultState();
    localStorage.setItem(STATE_KEY, JSON.stringify(fresh));
    if (this._channel) {
      this._channel.postMessage({ type: 'STATE_UPDATE', state: fresh });
    }
    this._notify(fresh);
    return fresh;
  },

  onChange(fn) {
    this._listeners.push(fn);
    return () => { this._listeners = this._listeners.filter(l => l !== fn); };
  },

  _notify(state) {
    this._listeners.forEach(fn => fn(state));
  },

  defaultState() {
    return {
      phase: 'lobby',         // lobby | question | reveal | scores | ended
      players: {},            // { name: { score, answered } }
      selectedCategories: [], // array of category ids
      questionQueue: [],      // ordered list of { categoryId, questionId }
      currentIndex: -1,       // index into questionQueue
      currentQuestion: null,  // full question object
      answers: {},            // { playerName: choiceIndex }
      timeLimit: 20,          // seconds per question
      timerStart: null,       // timestamp when timer started
      showAnswer: false,
      updatedAt: Date.now()
    };
  }
};
