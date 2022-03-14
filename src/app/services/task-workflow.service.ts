import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskWorkflowService {
  workFlow = {
    workFlowTaskOne : 0,
    workFlowTaskTwo:0,
    workFlowTaskThree:0
  }
  workFlowTaskOne = 0
  workFlowTaskFour:Number = 0
  workFlowTaskThree:Number = 0
  workFlowTaskTwo:Number = 0

  constructor() { }

pushTaskOne(id:any){
  this.workFlow.workFlowTaskOne = id
  localStorage.setItem('pushTaskOne' , `${this.workFlow.workFlowTaskOne}`)
}
getTaskOne(){
  return this.workFlow.workFlowTaskOne
}
pushTaskTwo(id:any){
  this.workFlow.workFlowTaskTwo = id
  localStorage.setItem('pushTaskTwo' , `${this.workFlowTaskTwo}`)
}
pushTaskThree(id:any){
  this.workFlow.workFlowTaskThree = id
  localStorage.setItem('pushTaskThree' , `${this.workFlowTaskThree}`)
}
pushTaskFour(id:any){
  this.workFlowTaskFour = id
  localStorage.setItem('pushTaskFour' , `${this.workFlowTaskFour}`)
}

}
