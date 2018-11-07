import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tasks } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {

  taskDescription: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tasks: Tasks) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  addNewTask() {
    alert("Hey m here");
    this.tasks.addTask(this.taskDescription).then(response => {
      console.log(response);
  }).catch(e => {
      console.log(e);
  });
    alert("After adding!");
  }

  //   this.Tasks.addTask(this.taskDescription).subscribe((resp) => {
  //     this.navCtrl.push(MainPage);
  //   }, (err) => {
  //     this.navCtrl.push(MainPage);
  //   });
  // }

    // doLogin() {
    //   this.user.login(this.account).subscribe((resp) => {
    //     this.navCtrl.push(MainPage);
    //   }, (err) => {
    //     this.navCtrl.push(MainPage);
    //     // Unable to log in
    //     let toast = this.toastCtrl.create({
    //       message: this.loginErrorString,
    //       duration: 3000,
    //       position: 'top'
    //     });
    //     toast.present();
    //   });
    // }
}
