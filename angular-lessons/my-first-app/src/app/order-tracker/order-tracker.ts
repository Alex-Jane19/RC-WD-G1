import { Component } from '@angular/core';

type OrderStatus = 'pending' | 'shipping' | 'delivered' | 'cancelled';

@Component({
  imports: [],
  selector: 'app-order-tracker',
  styleUrl: './order-tracker.css',
  templateUrl: './order-tracker.html',
})

export class OrderTracker {
  orderStatus: OrderStatus = 'pending';

  changeStatus(status: OrderStatus): void {
    this.orderStatus = status;
  }
}

