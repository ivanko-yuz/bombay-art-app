import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from './classes/project';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectService {

  private projectsUrl = 'api/projects';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET projectes from the server */
  getProjects (): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        catchError(this.handleError('getprojects', []))
      );
  }

  /** GET project by id. Return `undefined` when id not found */
  getProjectNo404<Data>(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/?id=${id}`;
    return this.http.get<Project[]>(url)
      .pipe(
        map(projects => projects[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Project>(`getProject id=${id}`))
      );
  }

  /** GET project by id. Will 404 if id not found */
  getProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      catchError(this.handleError<Project>(`getProject id=${id}`))
    );
  }

  /* GET projects whose name contains search term */
  searchProjects(term: string): Observable<Project[]> {
    if (!term.trim()) {
      // if not search term, return empty project array.
      return of([]);
    }
    return this.http.get<Project[]>(`api/projects/?name=${term}`).pipe(
      catchError(this.handleError<Project[]>('searchProjects', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new project to the server */
  addProject (project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, httpOptions).pipe(
      catchError(this.handleError<Project>('addProject'))
    );
  }

  /** DELETE: delete the project from the server */
  deleteProject (project: Project | number): Observable<Project> {
    const id = typeof project === 'number' ? project : project.id;
    const url = `${this.projectsUrl}/${id}`;

    return this.http.delete<Project>(url, httpOptions).pipe(
      catchError(this.handleError<Project>('deleteProject'))
    );
  }

  /** PUT: update the project on the server */
  updateProject (project: Project): Observable<any> {
    return this.http.put(this.projectsUrl, project, httpOptions).pipe(
      catchError(this.handleError<any>('updateProject'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
