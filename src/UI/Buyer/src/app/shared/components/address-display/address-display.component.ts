import { Component, Input, OnInit } from '@angular/core';
import { Address } from '@ordercloud/angular-sdk';

@Component({
  selector: 'shared-address-display',
  templateUrl: './address-display.component.html',
  styleUrls: ['./address-display.component.scss']
})
export class AddressDisplayComponent implements OnInit {

  @Input() address: Address;

  ngOnInit() {
    this.address['FullName'] = this.getFullName(this.address);
  }

  protected getFullName(address: Address) {
    let fullName = '';
    if (address.FirstName || address.LastName) {
      if (address.FirstName && !address.LastName) {
        fullName = address.FirstName;
      } else if (!address.FirstName && address.LastName) {
        fullName = address.LastName;
      } else {
        fullName = `${address.FirstName} ${address.LastName}`;
      }
    }
    return fullName;
  }
}
