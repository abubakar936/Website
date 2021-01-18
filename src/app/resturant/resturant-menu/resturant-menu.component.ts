import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/user/resturants.service';

@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.css']
})
export class ResturantMenuComponent implements OnInit {
  menus: any;
  updateForm: boolean;
  addMenuForm: boolean;
  resturant
  updatemenu: any;
  categories
  addCategoryForm: boolean

  constructor(
    private service: ResturantsService
  ) { }

  ngOnInit(): void {
    this.menus = this.service.menus
    this.categories = this.service.resturant.menucategies
    console.log("these are the category" + this.categories)
  }
  menuFOrm() {
    this.addMenuForm = true
    console.log(this.service.resturant._id)
  }
  categoryForm() {
    this.addCategoryForm = true
    // console.log(this.service.resturant._id)
  }

  addNewCategory(f) {
    this.service.addcategory(this.service.resturant._id, f.value)
      .subscribe(response => {
        alert("category  added ");
        console.log(response);
      })


  }


  addMenu(f,) {
    this.service.addMenu(f.value, this.service.resturant._id)
      .subscribe(response => {
        alert("Product added ");
        console.log(response);
      })


  }



  updateMenuForm(menu) {
    this.updateForm = true;
    this.updatemenu = menu;

    console.log(menu)
    console.log(this.updatemenu)

  }
  upateMenu(menuid, menu) {
    //  console.log(resturantid, menu.value, menuid);
    this.service.updateMenu(menuid, menu.value)
      .subscribe(response => {
        this.service.menus = response;
        console.log(this.service.menus)
        alert(this.service.menus);
      })
  }

}
