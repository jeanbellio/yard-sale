import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-items-data-view',
  templateUrl: './items-data-view.component.html',
  styleUrls: ['./items-data-view.component.scss']
})
export class ItemsDataViewComponent implements OnInit {

  products: Product[] = [];
  products2: Product[] = [];
  responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.productService.getProducts().then((data: any) => {
        this.products = data;
        this.products2 = data;
      });

      this.primengConfig.ripple = true;
  }
  
  display: boolean = false;
  imageName: string = '';
  showDialog(folderName: string, imageName: string) {
      this.display = true;
      this.imageName = folderName + '/' + imageName;
  }
}
