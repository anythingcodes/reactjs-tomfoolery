import { EventEmitter } from "events"; // built into Node.js
import dispatcher from "../dispatcher";

class ToDoStore extends EventEmitter {
    constructor() {
        super();
        this.tasks = [
            {
                id: 97864,
                text: "Pet the Cat",
                complete: false
            },
            {
                id: 1253286,
                text: "Eat Ice Cream",
                complete: false
            },
            {
                id: 5464543,
                text: "Breathe",
                complete: false
            }
        ];
    }

    createTask(text){
        const id = Date.now();
        this.tasks.push({
            id,
            text,
            complete: false
        });
        this.emit("change");
    }
    
    getAll() {
        return this.tasks;
    }

    handleActions(action){
        switch(action.type) {
            case "CREATE_TASK": {
                this.createTask(action.text);
            }
            case "RECEIVE_TASKS": {
                this.tasks = action.tasks;
                this.emit("change");
            }
        }
    }
}

const toDoStore = new ToDoStore;
dispatcher.register(toDoStore.handleActions.bind(toDoStore));
window.dispatcher = dispatcher;
export default toDoStore;