
export class Card {

	public constructor(public title:string ="",public body:string ="",
        public priority:number = 1,public readFlag:boolean = false, public id?:number) {
	}

	public getCardSelected(card:Card){
		return card;
	}
}
