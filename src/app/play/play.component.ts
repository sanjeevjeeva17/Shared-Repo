import{ Component } from '@angular/core';
import {playService} from './shared/play.service'


@Component({
selector: 'app-play',
templateUrl:'./play.component.html',
styleUrls:['./play.component.css']
})

export class PlayComponent {
    constructor(private playService: playService)
}