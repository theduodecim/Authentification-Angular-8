import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../_services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'alert-component',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;
    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                switch (message && message.type) {
                    case 'success':
                        message.cssClass = 'alert alert-success';
                        console.log(message);
                        break;
                    case 'error':
                        message.cssClass = 'alert alert-danger';
                        console.log(message.cssClass);
                        break;
                }

                this.message = message;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}