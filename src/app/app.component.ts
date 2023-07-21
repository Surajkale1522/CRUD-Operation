import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'searchBox';
  constructor(private router:Router){}
  login(){
this.router.navigate(['/login']);
  }
//   title = 'searchBox';

//   // userName: string = '';
//   // passWord: string = '';
//   // loginForm: FormGroup;
//   // constructor(private router: Router,
//   //   private formBuilder: FormBuilder) {
//   //   // this.loginForm = this.formBuilder.group({
//   //   //   username: ['', Validators.required],
//   //   //   password: ['', Validators.required]
//   //   // })
//   // }

//   // getUserName() {
//   //   return this.loginForm.get('username');
//   // }

//   // getPassword() {
//   //   return this.loginForm.get('password');
//   // }

// // count = 0;
// // increment(){
// //  this.count++;
// // }
// // decrement(){
// //   if(this.count >0){
// //     this.count --;
// //   }

// // }
// people = [
//   { name: 'John Doe', age: 25 },
//   { name: 'Jane Smith', age: 30 },
//   { name: 'Bob Johnson', age: 22 },
//   {name: 'Suraj smith' , age:22}
// ];

// editForm: FormGroup;
// showEditForm = false;
// editingPerson: any;

// constructor(private formBuilder: FormBuilder,
//   private router: Router) {
//   this.editForm = this.formBuilder.group({
//     name: ['', Validators.required],
//     age: [null, [Validators.required, Validators.min(0)]],
//   });
// }

// editPerson(person: any) {
//   this.showEditForm = true;
//   this.editingPerson = person;
//   this.editForm.patchValue({
//   name: person.name,
//   age: person.age
//   });
// }

// saveChanges() {
//   if (this.editForm.valid) {
//     const updatedPerson = {
//       name: this.editForm.value.name,
//       age: this.editForm.value.age,
//     };

    
//     const index = this.people.indexOf(this.editingPerson);
//     if (index !== -1) {
//       this.people[index] = updatedPerson;
//     }
//     this.showEditForm = false;
//     this.editForm.reset();
//   }
// }

// deletePerson(person: any) {
//   const index = this.people.indexOf(person);
//   if (index !== -1) {
//     this.people.splice(index, 1);
//   }
// }


//   /**
//    * function for view all product list
//    */
//   clickHere() {
//     this.router.navigate(['/product'])
//   }


}
