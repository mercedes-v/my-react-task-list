

tasks = []
task_id_counter = 1

# Crear una nueva tarea
@app.route('/tasks', methods=['POST'])
def create_task():
    global task_id_counter
    data = request.get_json()
    title = data.get('title')
    if title is None:
        return jsonify({'error': 'El título de la tarea es requerido'}), 400

    new_task = {
        'id': task_id_counter,
        'title': title,
        'completed': False
    }
    tasks.append(new_task)
    task_id_counter += 1
    return jsonify(new_task), 201

# Actualizar una tarea
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = next((t for t in tasks if t['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Tarea no encontrada'}), 404
    
    data = request.get_json()
    if 'title' in data:
        task['title'] = data['title']
    if 'completed' in data:
        task['completed'] = data['completed']
    
    return jsonify(task)

# Eliminar una tarea
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    task = next((t for t in tasks if t['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Tarea no encontrada'}), 404

    tasks = [t for t in tasks if t['id'] != task_id]
    return '', 204

# Lista de todas las tareas
@app.route('/tasks', methods=['GET'])
def get_all_tasks():
    return jsonify(tasks)

# Listar tareas completas e incompletas
@app.route('/tasks/completed', methods=['GET'])
def get_completed_tasks():
    completed_tasks = [task for task in tasks if task['completed']]
    return jsonify(completed_tasks)

@app.route('/tasks/incomplete', methods=['GET'])
def get_incomplete_tasks():
    incomplete_tasks = [task for task in tasks if not task['completed']]
    return jsonify(incomplete_tasks)

# Obtener una sola tarea
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = next((t for t in tasks if t['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Tarea no encontrada'}), 404
    return jsonify(task)

if __name__ == '__main__':
    app.run(debug=True)
