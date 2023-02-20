import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  project:any;
  hideform=false;
   submitted:any
    Obj: any;
  hacathon: any;
  dateObj: Date = new Date();
  groupsdata: any;
  i= 10;
  count=15
  quantity: number=10;

  List: any=[]
  List1: any=[]
  List2: any=[]
  List3: any=[]
  List4: any=[]
  data: any;
  Email:any
  filterData: any;
 

  ngOnInit(): void {
    this.Hideshowform();
    this.hacathon = new FormGroup(
      {
        fname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        lname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        groups : new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required,Validators.email]),
        interestedtechnology:new FormControl('',[Validators.required]),
        gender : new FormControl('',[Validators.required]),
      sid:new FormControl(0),
      registered:new FormControl(),
      Available:new FormControl()
      });
  }
  constructor(){
  this.Hideshowform()
}
   
    onSubmit() {
      console.log(this.Email)



     this.filterData=this.Obj.filter((data: any)=>{
      console.log(data.email)
return data.email === this.Email
     })
     console.log(this.filterData)
     for(let i=0;i<this.filterData.length;i++){

      var datas=this.filterData[i] 
     }
      if (this.hacathon.value.fname==''||this.hacathon.value.lname==''||this.hacathon.value.email==''||this.hacathon.value.groups==''||this.hacathon.value.interestedtechnology==''||this.hacathon.value.gender=='') {
        Swal.fire(  
          'Cancelled',  
          'You Must  Enter All fields !',           //give for condition to take all properties take empty values
          'error'                                  //then take one alert message like not save all data
        )  
    }else
    {
   
      var requestOptions = {
        method: 'POST',
        body:JSON.stringify(this.hacathon.value)
      };
      console.log(requestOptions);
      if(datas.email === this.Email){
        alert('You are already registered')
      
      
  }else{
    if(this.List.length > 15 || this.List1.length > 15 ||  this.List2.length > 15 ||  this.List3.length >15||  this.List4.length > 15) {

      
      alert("Group is full")
   
  
 
}
else{
  fetch("https://hilarious-jeans-calf.cyclic.app/employee/addemployee",{
  method:'POST',
  headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type":'application/json'
  },
  body:JSON.stringify(this.hacathon.value)
})  .then(response => response.json())
.then(result =>{
  alert("register successfully")
  console.log(result)

}
  )


  
.catch(error => console.log('error',error));
    
} 
   
  }   


}


     
    
  }
  Hideshowform()
{

  fetch("https://hilarious-jeans-calf.cyclic.app/employee/getemployee",{
    method:"GET",
    headers:{
      "access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify(this.Hideshowform)
  })
  .then(response => response.json())
  .then(result =>{
    console.log(result),
    this.Obj = result.EmployeeInfo
  console.log(this.Obj)
  this.List = this.Obj.filter((item: any ) => item.groups === 'Group1'); 
  console.log(this.List)
  this.List1 = this.Obj.filter((item: any ) => item.groups === 'Group2'); 
  this.List2 = this.Obj.filter((item: any ) => item.groups === 'Group3'); 
  this.List3 = this.Obj.filter((item: any ) => item.groups === 'Group4'); 
  this.List4 = this.Obj.filter((item: any ) => item.groups === 'Group5'); 
  }
  ).catch(err =>
    console.log('error',err))

   
}

view(){
  if(this.Obj.length==0)
  {
    Swal.fire( "Do you want to see Participant details? <br> Please Register !!", '', 'error').then(() => {         
      
  })
}else
{
  window.location.href='./show'
}

}

  onsubmit(){
  }
  get fname()
  {
   return this.hacathon.get('fname');
  }
  get lname()
  {
   return this.hacathon.get('lname') ;
  }
  get groups()
  {
   return this.hacathon.get('groups') ;
  }
  get interestedtechnology()
  {
   return this.hacathon.get('interestedtechnology') ;
  }
  get email()
  {
   return this.hacathon.get('email') ;
  }
  get gender()
  {
   return this.hacathon.get('gender') ;
  }


}



