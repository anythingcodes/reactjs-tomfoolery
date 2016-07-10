import React from "react";
import Task from "../components/modules/Task";
import * as TaskActions from "../actions/TaskActions"; // every single export
import ToDoStore from "../stores/ToDoStore";

export default class ToDos extends React.Component {

    constructor() {
        super();
        this.state = {
            tasks: ToDoStore.getAll()
        };
    }

    componentWillMount() {
        ToDoStore.on("change", () => {
           this.setState({
               tasks: ToDoStore.getAll()
           });
        });
    }

    reloadTasks() {
        TaskActions.reloadTasks();
    }

    render() {
        const { tasks } = this.state;

        const TaskComponents = tasks.map((task) => {
            return <Task key={task.id} {...task} />;
        });

        return (
            <div>
                <button onClick={this.reloadTasks.bind(this)}>Reload</button>
                <h2>My Upcoming ToDos:</h2>
                <ul>{TaskComponents}</ul>
            </div>

        );
    }
}