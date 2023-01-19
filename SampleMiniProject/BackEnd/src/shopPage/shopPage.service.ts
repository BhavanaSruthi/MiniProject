import { Injectable } from '@nestjs/common';
const { Client } = require('pg');
const shopPageData = [];

@Injectable()
export class ShopPageService {
  getHello(): string {
    return 'Hello World!';
  }
  async getShopPageEvents(): Promise<any> {
    let shopPageData=[];
    const client = new Client({
      connectionString:
        'postgres://arimayhelbtusv:4f065cfeb2e1f10411198fb401221468c059464c84cfd27ba6af022feaeadb69@ec2-52-22-226-8.compute-1.amazonaws.com:5432/d69tgvm526jhq7',
      ssl: {
        rejectUnauthorized: false,
      },
    });
    client.connect();
    const {rows} = await client.query('SELECT  * FROM  pdt.shopPage_data');
    shopPageData=rows;
    return shopPageData;
  }
 async getShopPageEventsByCategory(category:string): Promise<any> {
  let shopPageData=[];
    const client = new Client({
      connectionString:
        'postgres://arimayhelbtusv:4f065cfeb2e1f10411198fb401221468c059464c84cfd27ba6af022feaeadb69@ec2-52-22-226-8.compute-1.amazonaws.com:5432/d69tgvm526jhq7',
      ssl: {
        rejectUnauthorized: false,
      },
    });
    client.connect();
    const {rows} = await client.query(`'SELECT  * FROM  pdt.shopPage_data where category'+'='+${category}`);
    shopPageData=rows;
    return shopPageData;
  }
  async getShopPageEventsByCollection(collection:string): Promise<any> {
    let shopPageData=[];
      const client = new Client({
        connectionString:
          'postgres://arimayhelbtusv:4f065cfeb2e1f10411198fb401221468c059464c84cfd27ba6af022feaeadb69@ec2-52-22-226-8.compute-1.amazonaws.com:5432/d69tgvm526jhq7',
        ssl: {
          rejectUnauthorized: false,
        },
      });
      client.connect();
      const {rows} = await client.query(`'SELECT  * FROM  pdt.shopPage_data where category'+'='+${collection}`);
      shopPageData=rows;
      return shopPageData;
    }
    async getShopPageEventsByColor(color:string): Promise<any> {
      let shopPageData=[];
        const client = new Client({
          connectionString:
            'postgres://arimayhelbtusv:4f065cfeb2e1f10411198fb401221468c059464c84cfd27ba6af022feaeadb69@ec2-52-22-226-8.compute-1.amazonaws.com:5432/d69tgvm526jhq7',
          ssl: {
            rejectUnauthorized: false,
          },
        });
        client.connect();
        const {rows} = await client.query(`'SELECT  * FROM  pdt.shopPage_data where category'+'='+${color}`);
        shopPageData=rows;
        return shopPageData;
      }
}
