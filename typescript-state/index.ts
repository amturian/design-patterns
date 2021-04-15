// Context
class FitbitApp {
    private state: State = new UnsyncedState(this);

    public sync() {
        this.state.sync();
    }

    public unpair() {
        this.state.unpair();
    }

    public changeState(state: State) {
        this.state = state;
    }
}

interface State {
    context: FitbitApp;

    sync(): void;
    unpair(): void;
}

class DisconnectedState implements State {
    context: FitbitApp;

    constructor(context: FitbitApp) {
        this.context = context;
    }

    sync() {
        console.error('Cannot find device!');
    }

    unpair() {
        // do nothing here
    }
}

class SyncedState implements State {
    context: FitbitApp;

    constructor(context: FitbitApp) {
        this.context = context;
    }

    sync() {
        console.log('Already synced');
    }

    unpair() {
        console.log('Unpairing this device...');
        this.context.changeState(new DisconnectedState(this.context));
    }
}

class UnsyncedState implements State {
    context: FitbitApp;

    constructor(context: FitbitApp) {
        this.context = context;
    }

    sync() {
        console.log('Fething data from device...');
        console.log('Updating app UI...');
        this.context.changeState(new SyncedState(this.context));
        console.log('Done. New state is Synced.');
    }

    unpair() {
        console.log('Unpairing this device...');
        this.context.changeState(new DisconnectedState(this.context));
    }
}

const fitbitApp = new FitbitApp();
fitbitApp.sync();
fitbitApp.unpair();
fitbitApp.sync();

