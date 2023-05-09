import { LightningElement } from 'lwc';

export default class WelcomeMsg extends LightningElement {
customClass; 
handleColor(event){
    if(event.target.name == "red")
    {
        this.customClass='redStyle';
    }
    if(event.target.name == "green")
    {
        this.customClass='greenStyle';
    }
}  
} 