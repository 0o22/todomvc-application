import { client } from '../utils/fetchClient';
import { Todo } from '../types/Todo';

export const getTodos = () => {
  return client.get<Todo[]>(`/todos`);
};

export const createTodo = (todo: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', todo);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodo = (todoId: number, data: Partial<Todo>) => {
  return client.put(`/todos/${todoId}`, data);
};
