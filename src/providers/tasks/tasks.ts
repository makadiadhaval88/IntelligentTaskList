import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';

@Injectable()
export class Tasks {

  constructor(private file: File) {

    this.file.createFile("C:/", "appdata.txt", false);
  }

  addTask(taskDescription:String){
    let a = "Done";
    return this.file.writeExistingFile("C:/", "appdata.txt", "a");
    // alert("Hurry!"+taskDescription+"added");
    // return a;
  }


  // login(accountInfo: any) {
  //   let seq = this.api.post('login', accountInfo).share();

  //   seq.subscribe((res: any) => {
      
  //     if (res.status == 'success') {
  //       this._loggedIn(res);
  //     } else {
  //     }
  //   }, err => {
  //     console.error('ERROR', err);
  //   });

  //   return seq;
  // }

}
