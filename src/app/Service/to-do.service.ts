import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }
  editToDoArray$ = new BehaviorSubject<any>({});

  setEditToDoArray(data)
  {
    this.editToDoArray$.next(data);
  }
  deleteToDo(id)
  {
    return this.http.delete<any>('http://localhost:8000/api/todos/' + id);
  }
  getToDos() {
    return this.http.get<any>('http://localhost:8000/api/todos');
  }
  addToDos(form) {

    const data = {
      title: form.title,
      description: form.description,
      priority: form.priority,
      startDate: form.startDate,
      dueDate: form.dueDate,
      check: form.check
    };
    return this.http.post<any>('http://localhost:8000/api/todos', data);
  }
  updateToDo(form) {
    const data = {
      id: form.id,
      title: form.title,
      description: form.description,
      priority: form.priority,
      startDate: form.startDate,
      dueDate: form.dueDate,
      check: form.check
    };

    return this.http.post<any>('http://localhost:8000/api/todos/'+ data.id, data)
  }

  
}
