import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product';



@Component({
  selector: 'app-product-list',
  standalone: false,  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  selectedProduct : Product;
  products = [
    {
        id:1,
        name:"Reebok React",
        description:'once upon a time there was',
        brand:"Reebok",
        gender:"MEN",
        category:"RUNNING",
        size: [7,8,9,10],
        color:["White","Blue","Black"],
        price:160,
        is_in_inventory:false,
        items_left:3,
        imageURL:"../assets/images/fd_img_1.jpg",
        slug:"adfd"
      },
      {
        id:2,
        name:"Nike React",
        description:'once upon a time there was',
        brand:"Adidas",
        gender:"MEN",
        category:"RUNNING",
        size: [7,8,9,10],
        color:["White","Blue","Black"],
        price:160,
        discountPrice:100,
        is_in_inventory:true,
        items_left:3,
        imageURL:"../assets/images/fd_img_2.jpg",
        slug:"adfd"

      },
      {
        id:3,
        name:"Baata React",
        description:'once upon a time there was',
        brand:"Baata",
        gender:"MEN",
        category:"RUNNING",
        size: [7,8,9,10],
        color:["White","Blue","Black"],
        price:160,
        is_in_inventory:true,
        items_left:3,
        imageURL:"../assets/images/fd_img_3.jpg",
        slug:"adfd"
      },
      {   id:4,
        name:"Nike React",
        description:'once upon a time there was',
        brand:"NIKE",
        gender:"MEN",
        category:"RUNNING",
        size: [7,8,9,10],
        color:["White","Blue","Black"],
        price:160,
        discountPrice:100,
        is_in_inventory:false,
        items_left:3,
        imageURL:"../assets/images/fd_img_4.jpg",
        slug:"adfd"
      },
      {
        id:5,
        name:"Nike React",
        description:'once upon a time there was',
        brand:"NIKE",
        gender:"MEN",
        category:"RUNNING",
        size: [7,8,9,10],
        color:["White","Blue","Black"],
        price:160,
        is_in_inventory:true,
        items_left:3,
        imageURL:"../assets/images/fd_img_5.jpg",
        slug:"adfd"
      },
      {
        id:6,
        name:"Nike React",
        description:'once upon a time there was',
        brand:"NIKE",
        gender:"MEN",
        category:"RUNNING",
        size: [7,8,9,10],
        color:["White","Blue","Black"],
        price:160,
        discountPrice:100,
        is_in_inventory:true,
        items_left:3,
        imageURL:"../assets/images/fd_img_6.jpg",
        slug:"adfd"

      },
      {
        id:7,
        name:"Nike React",
        description:'once upon a time there was',
        brand:"NIKE",
        gender:"MEN",
        category:"RUNNING",
        size: [7,8,9,10],
        color:["White","Blue","Black"],
        price:160,
        is_in_inventory:true,
        items_left:3,
        imageURL:"../assets/images/fd_img_7.jpg",
        slug:"adfd"
      },
      {   id:8,
        name:"Nike React",
        description:'once upon a time there was',
        brand:"NIKE",
        gender:"MEN",
        category:"RUNNING",
        size: [7,8,9,10],
        color:["White","Blue","Black"],
        price:160,
        discountPrice:100,
        is_in_inventory:true,
        items_left:3,
        imageURL:"../assets/images/fd_img_8.jpg",
        slug:"adfd"},
        {
          id:9,
          name:"Nike React",
          description:'once upon a time there was',
          brand:"NIKE",
          gender:"MEN",
          category:"RUNNING",
          size: [7,8,9,10],
          color:["White","Blue","Black"],
          price:160,
          discountPrice:10,
          is_in_inventory:true,
          items_left:3,
          imageURL:"../assets/images/fd_img_9.jpg",
          slug:"adfd"
        },
        {   id:11,
          name:"Nike React",
          description:'once upon a time there was',
          brand:"NIKE",
          gender:"MEN",
          category:"RUNNING",
          size: [7,8,9,10],
          color:["White","Blue","Black"],
          price:160,
          is_in_inventory:true,
          items_left:3,
          imageURL:"../assets/images/fd_img_10.jpg",
          slug:"adfd"
        },
        {
          id:12,
          name:"Nike React",
          description:'once upon a time there was',
          brand:"NIKE",
          gender:"MEN",
          category:"RUNNING",
          size: [7,8,9,10],
          color:["White","Blue","Black"],
          price:160,
          is_in_inventory:true,
          items_left:3,
          imageURL:"../assets/images/fd_img_1.jpg",
          slug:"adfd"
        },
        {
          id:13,
          name:"Nike React",
          description:'once upon a time there was',
          brand:"NIKE",
          gender:"MEN",
          category:"RUNNING",
          size: [7,8,9,10],
          color:["White","Blue","Black"],
          price:160,
          discountPrice:20,
          is_in_inventory:true,
          items_left:3,
          imageURL:"../assets/images/fd_img_2.jpg",
          slug:"adfd"
  
        },
        {
          id:14,
          name:"Nike React",
          description:'once upon a time there was',
          brand:"NIKE",
          gender:"MEN",
          category:"RUNNING",
          size: [7,8,9,10],
          color:["White","Blue","Black"],
          price:160,
          is_in_inventory:true,
          items_left:3,
          imageURL:"../assets/images/fd_img_3.jpg",
          slug:"adfd"
        },
        {   id:15,
          name:"Nike React",
          description:'once upon a time there was',
          brand:"NIKE",
          gender:"MEN",
          category:"RUNNING",
          size: [7,8,9,10],
          color:["White","Blue","Black"],
          price:160,
          is_in_inventory:true,
          items_left:3,
          imageURL:"../assets/images/fd_img_4.jpg",
          slug:"adfd"},
          {
            id:16,
            name:"Nike React",
            description:'once upon a time there was',
            brand:"NIKE",
            gender:"MEN",
            category:"RUNNING",
            size: [7,8,9,10],
            color:["White","Blue","Black"],
            price:160,
            discountPrice:30,
            is_in_inventory:true,
            items_left:3,
            imageURL:"../assets/images/fd_img_5.jpg",
            slug:"adfd"
          },
          {   id:17,
            name:"Nike React",
            description:'once upon a time there was',
            brand:"NIKE",
            gender:"MEN",
            category:"RUNNING",
            size: [7,8,9,10],
            color:["White","Blue","Black"],
            price:160,
            is_in_inventory:true,
            items_left:3,
            imageURL:"../assets/images/fd_img_6.jpg",
            slug:"adfd"
          },
          {
            id:18,
            name:"Nike React",
            description:'once upon a time there was',
            brand:"NIKE",
            gender:"MEN",
            category:"RUNNING",
            size: [7,8,9,10],
            color:["White","Blue","Black"],
            price:160,
            is_in_inventory:true,
            items_left:3,
            imageURL:"../assets/images/fd_img_7.jpg",
            slug:"adfd"
          },
          {
            id:19,
            name:"Nike React",
            description:'once upon a time there was',
            brand:"NIKE",
            gender:"MEN",
            category:"RUNNING",
            size: [7,8,9,10],
            color:["White","Blue","Black"],
            price:160,
            is_in_inventory:true,
            items_left:3,
            imageURL:"../assets/images/fd_img_8.jpg",
            slug:"adfd"
    
          },
          {
            id:20,
            name:"Nike React",
            description:'once upon a time there was',
            brand:"NIKE",
            gender:"MEN",
            category:"RUNNING",
            size: [7,8,9,10],
            color:["White","Blue","Black"],
            price:160,
            discountPrice:50,
            is_in_inventory:true,
            items_left:3,
            imageURL:"../assets/images/fd_img_9.jpg",
            slug:"adfd"
          },
          {   id:21,
            name:"Nike React",
            description:'once upon a time there was',
            brand:"NIKE",
            gender:"MEN",
            category:"RUNNING",
            size: [7,8,9,10],
            color:["White","Blue","Black"],
            price:160,
            is_in_inventory:true,
            items_left:3,
            imageURL:"../assets/images/fd_img_10.jpg",
            slug:"adfd"},
            {
              id:22,
              name:"Nike React",
              description:'once upon a time there was',
              brand:"NIKE",
              gender:"MEN",
              category:"RUNNING",
              size: [7,8,9,10],
              color:["White","Blue","Black"],
              price:160,
              discountPrice:100,
              is_in_inventory:true,
              items_left:3,
              imageURL:"../assets/images/fd_img_1.jpg",
              slug:"adfd"
            },
            {   id:1,
              name:"Nike React",
              description:'once upon a time there was',
              brand:"NIKE",
              gender:"MEN",
              category:"RUNNING",
              size: [7,8,9,10],
              color:["White","Blue","Black"],
              price:160,
              is_in_inventory:true,
              items_left:3,
              imageURL:"../assets/images/fd_img_2.jpg",
              slug:"adfd"
            },
            {
              id:1,
              name:"Nike React",
              description:'once upon a time there was',
              brand:"NIKE",
              gender:"MEN",
              category:"RUNNING",
              size: [7,8,9,10],
              color:["White","Blue","Black"],
              price:160,
              is_in_inventory:true,
              items_left:3,
              imageURL:"../assets/images/fd_img_3.jpg",
              slug:"adfd"
            },
            {
              id:1,
              name:"Nike React",
              description:'once upon a time there was',
              brand:"NIKE",
              gender:"MEN",
              category:"RUNNING",
              size: [7,8,9,10],
              color:["White","Blue","Black"],
              price:160,
              is_in_inventory:false,
              items_left:3,
              imageURL:"../assets/images/fd_img_4.jpg",
              slug:"adfd"
      
            },
            {
              id:1,
              name:"Nike React",
              description:'once upon a time there was',
              brand:"NIKE",
              gender:"MEN",
              category:"RUNNING",
              size: [7,8,9,10],
              color:["White","Blue","Black"],
              price:160,
              is_in_inventory:true,
              items_left:3,
              imageURL:"../assets/images/fd_img_5.jpg",
              slug:"adfd"
            },
            {   id:1,
              name:"Nike React",
              description:'once upon a time there was',
              brand:"NIKE",
              gender:"MEN",
              category:"RUNNING",
              size: [7,8,9,10],
              color:["White","Blue","Black"],
              price:160,
              is_in_inventory:true,
              items_left:3,
              imageURL:"../assets/images/fd_img_6.jpg",
              slug:"adfd"},
              {
                id:1,
                name:"Nike React",
                description:'once upon a time there was',
                brand:"NIKE",
                gender:"MEN",
                category:"RUNNING",
                size: [7,8,9,10],
                color:["White","Blue","Black"],
                price:160,
                is_in_inventory:false,
                items_left:3,
                imageURL:"../assets/images/fd_img_7.jpg",
                slug:"adfd"
              },
              {   id:1,
                name:"Nike React",
                description:'once upon a time there was',
                brand:"NIKE",
                gender:"MEN",
                category:"RUNNING",
                size: [7,8,9,10],
                color:["White","Blue","Black"],
                price:160,
                is_in_inventory:false,
                items_left:3,
                imageURL:"../assets/images/fd_img_8.jpg",
                slug:"adfd"
              },
              {
                id:1,
                name:"Nike React",
                description:'once upon a time there was',
                brand:"NIKE",
                gender:"MEN",
                category:"RUNNING",
                size: [7,8,9,10],
                color:["White","Blue","Black"],
                price:160,
                is_in_inventory:true,
                items_left:3,
                imageURL:"../assets/images/fd_img_9.jpg",
                slug:"adfd"
              },
              {
                id:1,
                name:"Nike React",
                description:'once upon a time there was',
                brand:"NIKE",
                gender:"MEN",
                category:"RUNNING",
                size: [7,8,9,10],
                color:["White","Blue","Black"],
                price:160,
                discountPrice:100,
                is_in_inventory:true,
                items_left:3,
                imageURL:"../assets/images/fd_img_10.jpg",
                slug:"adfd"
        
              },
              {
                id:1,
                name:"Nike React",
                description:'once upon a time there was',
                brand:"NIKE",
                gender:"MEN",
                category:"RUNNING",
                size: [7,8,9,10],
                color:["White","Blue","Black"],
                price:160,
                is_in_inventory:true,
                items_left:3,
                imageURL:"../assets/images/fd_img_1.jpg",
                slug:"adfd"
              },
              {   id:1,
                name:"Paragon React",
                description:'once upon a time there was',
                brand:"NIKE",
                gender:"MEN",
                category:"RUNNING",
                size: [7,8,9,10],
                color:["White","Blue","Black"],
                price:160,
                discountPrice:100,
                is_in_inventory:false,
                items_left:3,
                imageURL:"../assets/images/fd_img_2.jpg",
                slug:"adfd"},
                {   id:1,
                  name:"Adidas React",
                  description:'once upon a time there was',
                  brand:"NIKE",
                  gender:"MEN",
                  category:"RUNNING",
                  size: [7,8,9,10],
                  color:["White","Blue","Black"],
                  price:160,
                  discountPrice:100,
                  is_in_inventory:true,
                  items_left:3,
                  imageURL:"../assets/images/fd_img_2.jpg",
                  slug:"adfd"}
    
    ]
    @Input()
    searchText : string = '';
    totalProductsCount = this.products.length;
    totalProductsInStock = this.products.filter(p=>p.is_in_inventory===true).length;
    totalProductsOutOfStock=this.products.filter(p=>p.is_in_inventory===false).length;
    selectedFilterRadioButtonChanged : String = 'all'
    onFilterChanged(value: String){
      
      this.selectedFilterRadioButtonChanged=value;
      console.log("On filter log changed : "+this.selectedFilterRadioButtonChanged)
    }

   onChangeText(value : string){

      this.searchText=value;
      console.log("Product list component "+this.searchText);
    }

}
