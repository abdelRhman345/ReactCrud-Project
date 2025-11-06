import type { IProduct } from "../Interface";
import { v4 as uuidv } from 'uuid';

export const productList: IProduct[] = [
  {
    id: uuidv(),
    title: '2025 General Cars',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos saepe vero consequuntur illum! Quas aliquid molestiae dolore, iste quis rerum id dolorem sed modi mollitia obcaecati, nesciunt officia vel!',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    price: '500000',
    colors: ['#ff0032', '#2563eb', '#ff6e31'],
    category: {
      name: 'Cars',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
    }
  },
  {
    id: uuidv(),
    title: 'Special Cars',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos saepe vero consequuntur illum! Quas aliquid molestiae dolore, iste quis rerum id dolorem sed modi mollitia obcaecati, nesciunt officia vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos ',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1283',
    price: '1500000',
    colors: ['#ff0032', '#2563eb', '#ff6e31'],
    category: {
      name: 'Cars',
      imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1283'
    }
  },
  {
    id: uuidv(),
    title: 'Red Cars For 2025',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos saepe vero consequuntur illum! Quas aliquid molestiae dolore, iste quis rerum id dolorem sed modi mollitia obcaecati, nesciunt officia vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos ',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    price: '1500000',
    colors: ['#ff0032', '#2563eb', '#ff6e31'],
    category: {
      name: 'Cars',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070'
    }
  },
  {
    id: uuidv(),
    title: 'Special Design Cars For 2026',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos saepe vero consequuntur illum! Quas aliquid molestiae dolore, iste quis rerum id dolorem sed modi mollitia obcaecati, nesciunt officia vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos ',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1737708000164-72fcfbe4a79f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1344',
    price: '1500000',
    colors: ['#ff0032', '#2563eb', '#ff6e31'],
    category: {
      name: 'Cars',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1737708000164-72fcfbe4a79f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1344'
    }
  }
]