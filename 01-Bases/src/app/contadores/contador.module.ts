import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({

    declarations:[

        ContadorComponent
    ],
    imports:[

        CommonModule

    ],
    exports:[

        ContadorComponent

    ]

})


export class ContadorModule{


}