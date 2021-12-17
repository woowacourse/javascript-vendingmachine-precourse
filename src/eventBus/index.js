import { customError } from '../common/error.js';

class EventBus {
    constructor() {
        this.eventBus = new Map();
        this.eventTypeList = [];
    }

    watch(target) {
        if (this.target !== undefined) throw customError('already', 'Watch target is already been registed');

        this.target = target;
    }

    addEventType(...types) {
        types.forEach((type) => {
            if (this.eventTypeList.includes(type)) return;
            this.target.addEventListener(type, this.eventHandling.bind(this));
            this.eventTypeList.push(type);
        });
    }

    setEvent(event, targetId, callback) {
        if (this.eventBus.get(`${event}:${targetId}`) !== undefined) return;

        this.eventBus.set(`${event}:${targetId}`, callback);
    }

    eventHandling(ev) {
        const { type } = ev;
        const { eventId } = ev.target.dataset;

        const handler = this.eventBus.get(`${type}:${eventId}`);
        if (handler === undefined) return;

        ev.stopPropagation();
        handler(ev);
    }
}

const eventBus = new EventBus();

export const watch = eventBus.watch.bind(eventBus);
export const setEvent = eventBus.setEvent.bind(eventBus);
export const addEventType = eventBus.addEventType.bind(eventBus);

export default eventBus;
