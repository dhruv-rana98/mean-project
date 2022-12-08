import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{

    enteredTitle='';
    enteredContent = ''
    @Output() postCreated = new EventEmitter(); //creating an eventemitter object
    //@Output() decorator helps the event to be listened outside the component
     onAddPost(){
        // console.log(postInput); getting data from the htmlelement 
        const post = {title: this.enteredTitle, content: this.enteredContent};
        this.postCreated.emit(post); //Emitting the event using the created event emitter object
    }

}