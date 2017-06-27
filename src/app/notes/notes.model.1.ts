import {ActionBox} from './common/action-box/action-box.model'
export class Notes {
    private actionBoxes:  ActionBox[] = [];
    constructor(){}
    
    public get ActionBoxs(): ActionBox[]
    {
        return this.actionBoxes;
    }
    public addActionBox(actionBox: ActionBox): void
    {
        this.actionBoxes.push(actionBox);
    }
}
