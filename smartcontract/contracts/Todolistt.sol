// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ToDoList {
    struct Task {
        string taskDescription;
        bool isTaskCompleted;
        address taskCreator;
    }

    Task[] public tasks;

    function addTask(string memory _taskDescription) public {
        tasks.push(Task(_taskDescription, false, msg.sender));
    }

    modifier onlyTaskCreator(uint256 _index) {
        require(tasks[_index].taskCreator == msg.sender, "Only task creator can perform this action");
        _;
    }

    function completeTask(uint256 _index) public onlyTaskCreator(_index) {
        tasks[_index].isTaskCompleted = true;
    }

    function viewTasks() public view returns (Task[] memory) {
        uint256 taskCount = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (tasks[i].taskCreator == msg.sender) {
                taskCount++;
            }
        }

        Task[] memory userTasks = new Task[](taskCount);
        uint256 j = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (tasks[i].taskCreator == msg.sender) {
                userTasks[j] = tasks[i];
                j++;
            }
        }

        return userTasks;
    }

    function deleteCompletedTasks() public {
        uint256 i = 0;
        while (i < tasks.length) {
            if (tasks[i].isTaskCompleted && tasks[i].taskCreator == msg.sender) {
                if (i != tasks.length - 1) {
                    tasks[i] = tasks[tasks.length - 1];
                }
                

            tasks.pop();
        } else {
            i++;
        }
    }
}
    }
    