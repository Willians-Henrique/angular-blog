import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
    photoCover:string =""
    contentTitle:string =""
    contentDescription:string ='ola mundo !'
     id:string | null ='0';

  constructor(
    private route:ActivatedRoute
  ){

  }

  ngOnInit():void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id==id)[0]
    this.contentTitle = result.title;
    this.photoCover = result.photoCover;
    this.contentDescription = result.description;
  }
  
}
