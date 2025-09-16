from flask import Flask, request, jsonify
from models.tasks import Task

# __name__ == "__main__"
app = Flask(__name__)


# RESTFUL API -> GET, POST, PUT, DELETE uses all Rest methods
# GET -> Read Complete
# POST -> Create Complete
# PUT -> Update Complete
# DELETE -> Delete Complete
# HEAD -> Read Header
# OPTIONS -> Read Header
# PATCH -> Update Partial

# CRUD -> Create, Read, Update, Delete -> POST, GET, PUT, DELETE
tasks = []
task_id_control = 1


@app.route('/tasks', methods=['POST'])
def create_task():
    global task_id_control

    data = request.get_json()
    new_task = Task(id=task_id_control, title=data.get('title'),
                    description=data.get('description', ''))
    task_id_control += 1
    tasks.append(new_task)
    print((tasks))
    return jsonify({'message': 'New task added successfully'})


@app.route('/tasks', methods=['GET'])
def get_tasks():
    task_list = [task.to_dict() for task in tasks]

    output = {
        'tasks': task_list,
        'total_tasks': 0
    }
    return jsonify(output)


@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    for task in tasks:
        if task.id == task_id:
            return jsonify({'task': task.to_dict()})
    return jsonify({'message': 'Task not found'}), 404


@app.route('/tasks/<int:update_task_id>', methods=['PUT'])
def update_task(update_task_id):
    for task in tasks:
        if task.id == update_task_id:
            data = request.get_json()
            task.title = data.get('title', task.title)
            task.description = data.get('description', task.description)
            task.completed = data.get('completed', task.completed)
            return jsonify({'message': 'Task updated successfully'})
    return jsonify({'message': 'Task not found'}), 404


@app.route('/tasks/<int:delete_task_id>', methods=['DELETE'])
def delete_task(delete_task_id):
    task_to_delete = list(
        filter(lambda task: task.id == delete_task_id, tasks))
    if task_to_delete:
        tasks.remove(task_to_delete[0])
        return jsonify({'message': 'Task deleted successfully'})
    return jsonify({'message': 'Task not found'}), 404


# Only do this if this file is being run manually and locally
if __name__ == "__main__":
    app.run(debug=True)


# HTTP Status Codes
# 200 -> OK
# 201 -> Created
# 400 -> Bad Request
# 404 -> Not Found
# 500 -> Internal Server Error
