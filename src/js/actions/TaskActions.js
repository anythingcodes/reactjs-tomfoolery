import dispatcher from "../dispatcher";

export function createTask(text) {
    dispatcher.dispatch({
        type: "CREATE_TASK",
        text
    });
};

export function deleteTask(id) {
    dispatcher.dispatch({
        type: "DELETE_TASK",
        id
    });
};

export function reloadTasks() {
    dispatcher.dispatch({
       type: "FETCH_TASKS"
    });
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TASKS",
            tasks: [
                {
                    id: 5436436,
                    text: "Grocery Shopping",
                    complete: false
                },
                {
                    id: 123123,
                    text: "Pay Bills",
                    complete: false
                },
                {
                    id: 89692,
                    text: "Vacuum Living Room",
                    complete: false
                },
                {
                    id: 6575,
                    text: "Windex",
                    complete: false
                }
            ]
        });
    }, 1000);
}