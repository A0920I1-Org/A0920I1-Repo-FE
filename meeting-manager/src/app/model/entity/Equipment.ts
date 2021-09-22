import {OrderEquipment} from './OrderEquipment';


export class Equipment {
  id: number;
  name: string;
  repairQuantity: number;
  stock: number;
  imageUrl: string;
  orderEquipmentList: OrderEquipment[];

  constructor(id: number, quantityRepair: number, stock: number, imageUrl: string, orderEquipmentList: OrderEquipment[]) {
    this.id = id;
    this.repairQuantity = quantityRepair;
    this.stock = stock;
    this.imageUrl = imageUrl;
    this.orderEquipmentList = orderEquipmentList;
  }
}
