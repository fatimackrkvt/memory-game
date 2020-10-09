import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardItem } from '../../models/CardItem';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardItem : CardItem;
  @Output() decide : EventEmitter<CardItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickImg = () => {
    console.log("Clicked me " + this.cardItem.name);
    this.decide.emit(this.cardItem);
  }

}