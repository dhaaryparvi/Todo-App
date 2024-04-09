import './style.css'
interface ToDo{
  title:string;
  isCompleted:boolean;
  readonly id:string;
}
const todos: ToDo[]=[];
const todosContainer=document.querySelector(".todocontainer") as HTMLDivElement;
const todoInput=document.getElementsByName("title")[0] as HTMLInputElement;
const myform=document.getElementById("myform") as HTMLElement;

myform.onsubmit=(e:SubmitEvent) => {
e.preventDefault();

const todo:ToDo={
  title:todoInput.value,
  isCompleted:false,
  id:String(Math.random()*1000),
};
todos.push(todo);
todoInput.value="";
renderToDo(todos);
};
const generateTodoItem=(title:string,isCompleted:boolean,id:string)=>{
  const todo=document.createElement("div") as HTMLDivElement;
  todo.className="todo";
  // creating a checkbox
  const checkBox=document.createElement("input") as HTMLInputElement; 
  checkBox.setAttribute("type","checkbox")
  checkBox.className="isCompleted"
  checkBox.checked=isCompleted;
  checkBox.onchange=()=>{
    todos.find((item)=>{
      todos.find((item)=>{
        if (item.id===id) item.isCompleted=checkBox.checked;
      });
    })
    paragraph.className=checkBox.checked? "textCut":"";
  };

  // creating P for title
  const paragraph:HTMLParagraphElement=document.createElement("p");
  // checkBox.setAttribute("type",)
  paragraph.innerText=title;
  paragraph.className=checkBox.checked? "textCut":"";


  const btn:HTMLButtonElement=document.createElement("button");
  btn.innerText="X";
  btn.className="deleteBtn";
  btn.onclick=()=>{
    deleteTodo(id);
  };


  // append all to todoitem
  todo.append(checkBox,paragraph,btn);
  todosContainer.append(todo);
};

const deleteTodo=(id:string)=>{
  const idx=todos.findIndex((item)=> item.id===id);
  todos.splice(idx,1);
  renderToDo(todos);
};
const renderToDo=(todos:ToDo[])=>{
  todosContainer.innerText="";
  todos.forEach((item)=>{
    generateTodoItem(item.title,item.isCompleted,item.id);
  });

}
