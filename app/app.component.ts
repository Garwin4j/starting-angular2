import { Component } from "angular2/core";

@Component({
    selector: 'events-app',
    template:`
    <div><h1>{{pageTitle}}</h1>
    </div>
    `
})

export class AppComponent{
    pageTitle: string = 'Jesus is Lord indeed!';
}