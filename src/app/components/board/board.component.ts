import { Component, OnInit } from '@angular/core';
import { CardItem } from '../../models/CardItem';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards : CardItem[];

  clickedCards : CardItem[] = [];

  matchPairCount : number = 0;

  tryCount : number = 0;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
     this.cards = [{id:1, name:'Bee1', img:'/assets/images/Bee1.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:2, name:'Bee1', img:'/assets/images/Bee1.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:3, name:'Bee2', img:'/assets/images/Bee2.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:4, name:'Bee2', img:'/assets/images/Bee2.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:5, name:'Butterfly1', img:'/assets/images/butterfly1.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:6, name:'Butterfly1', img:'/assets/images/butterfly1.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:7, name:'Butterfly2', img:'/assets/images/butterfly2.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:8, name:'Butterfly2', img:'/assets/images/butterfly2.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:9, name:'daisy', img:'/assets/images/daisy.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:10, name:'daisy', img:'/assets/images/daisy.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:11, name:'rose', img:'/assets/images/rose.png', imgShown:'/assets/images/yellow.png', isOpen:false},
                   {id:12, name:'rose', img:'/assets/images/rose.png', imgShown:'/assets/images/yellow.png', isOpen:false}
                  ];
      this.cards.sort(() => 0.5 - Math.random())
  }

  checkMatch = (cardItem) => {
    if(this.clickedCards.length == 0){
      this.clickedCards.push(cardItem);
    }
    else{
      this.tryCount ++;
       var firstClickedCard= this.clickedCards[0];
       if(firstClickedCard.name === cardItem.name){
         this.matchPairCount ++;
         if(this.matchPairCount === this.cards.length/2) {
            this.modalService.open('Congrats! You found all pairs', { size: 'sm' });
         }
       }
       else{
           firstClickedCard.imgShown = "/assets/images/yellow.png";
           cardItem.imgShown = "/assets/images/yellow.png";
           firstClickedCard.isOpen = false;
           cardItem.isOpen = false;
       }
       this.clickedCards = [];
    }
  }

  decide = (cardItem) => {
      if(cardItem.isOpen) return;
      cardItem.imgShown = cardItem.img;
      cardItem.isOpen = true;
      setTimeout(() => {
        this.checkMatch(cardItem);
      }, 1000);
  }
}