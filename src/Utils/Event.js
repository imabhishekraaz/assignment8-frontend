import { EventEmitter } from 'events'

export function createEvent(){
    return new EventEmitter();
};