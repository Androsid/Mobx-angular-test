import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

export class Todo {
    completed = false;
    title: string;
    id?: number;
  }

@Injectable()
export class DbService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private simDbsUrl = "http://localhost:3001/todos/";

  addTodo (todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.simDbsUrl, todo).pipe(
      tap((todo: Todo) => console.log(`added todo w/ id=${todo.id}`, todo)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  getTodos (): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.simDbsUrl)
      .pipe(
        tap(_ => console.log('fetched todos')),
        catchError(this.handleError('getTodos', []))
      );
  }

  deleteTodo(todo: Todo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.simDbsUrl}/${todo.id}`;

    return this.httpClient.delete<Todo>(url).pipe(catchError(this.handleError('deleteTodos', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
