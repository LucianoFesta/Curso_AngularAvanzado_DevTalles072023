import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  @Input('valor') progreso:number = 50; //Es una forma de renombrar el input que recibo del padre.
  @Input() btnClass:string = 'btn btn-primary';

  @Output() valorSalida:EventEmitter<number> = new EventEmitter();

  get getProgreso(){
    return `${this.progreso}%`;
  }

  valor(valor:number){
    if(this.progreso >= 100 && valor >= 5){
      this.valorSalida.emit(100); //Valor emitido hacia el componente padre.
      return this.progreso = 100;

    }else if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0); //Valor emitido hacia el componente padre.
      return this.progreso = 0;
      
    }

    this.progreso = this.progreso + valor;
    return this.valorSalida.emit(this.progreso); //Valor emitido hacia el componente padre.
  }

  onChange(valor:number){
    if(valor >= 100){
      this.progreso = 100;
    }else if(valor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }

    this.valorSalida.emit(this.progreso);
  }
}
