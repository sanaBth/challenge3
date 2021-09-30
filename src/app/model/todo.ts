export class Todo
{
  iserId : number;
  id : number;
  title : string;
  completed:boolean;
  constructor ( iserId : number,  id : number, title : string, completed : boolean)
{
  this.iserId = iserId;
  this.id = id;
  this.title = title;
  this.completed =completed;
  
}
}
