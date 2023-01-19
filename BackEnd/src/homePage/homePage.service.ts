import { Injectable } from '@nestjs/common';
const { Client } = require('pg');

@Injectable()
export class HomePageService {
  getHello(): string {
    return 'Hello World!';
  }
  async getHomePageEvents(): Promise<any>{
    let homePageData=[];
    const client = new Client({
      connectionString: 'postgres://arimayhelbtusv:4f065cfeb2e1f10411198fb401221468c059464c84cfd27ba6af022feaeadb69@ec2-52-22-226-8.compute-1.amazonaws.com:5432/d69tgvm526jhq7',
      ssl: {
        rejectUnauthorized: false
      }
    });
    
    client.connect();
    
    const {rows} = await client.query('SELECT  * FROM  pdt.homePage_data');
    homePageData=rows;
    return homePageData;
  }
  

}
