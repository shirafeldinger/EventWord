export class MyActionListener {
    private listeners: Record<string, ((data: any) => void)[]>;
  
    constructor() {
        this.listeners = {};
    }
  
    registerListener(action: string, listener: (data: any) => void): void {
      if (!this.listeners[action]) {
        this.listeners[action] = [];
      }
      this.listeners[action].push(listener);
    }
  
    removeListener(action: string): void {
      delete this.listeners[action];
    }
  
    emit(action: string, data: any): void {
      if (!this.listeners[action]) {
        throw new Error(`Can't emit an event. Event "${action}" doesn't exits.`);
      }
      this.listeners[action].forEach((listener) => listener(data));
    }
  }