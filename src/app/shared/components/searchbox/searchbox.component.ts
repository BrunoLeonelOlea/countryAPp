import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [],
})
export class SearchboxComponent implements OnInit, OnDestroy {
  private _debouncer: Subject<string> = new Subject<string>();
  public get debouncer(): Subject<string> {
    return this._debouncer;
  }
  public set debouncer(value: Subject<string>) {
    this._debouncer = value;
  }

  // Ingresa datos al componente de padre a hijo

  @Input()
  public initialValue: string = '';

  @Input()
  public placeholder: string = '';

  //Emite datos desde este componente a su componente padre
  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  public debouncerSubscription = new Subscription;

  ngOnInit(): void {
     this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(350))
      .subscribe((value) => this.onDebounce.emit(value));
  }

  ngOnDestroy(): void {
    this.debouncerSubscription.unsubscribe;
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }
}
