import { Controller, Get } from '@nestjs/common';
import { ShopPageService } from './shopPage.service';
import { Request} from  "@nestjs/common";
import { Query} from  "@nestjs/common";

@Controller()
export class ShopPageController {
  constructor(private readonly appService: ShopPageService) {}
  @Get("/shopPageEvents")
 async  getShopPageEvents(@Request() req, @Query() query): Promise<any> {
  if(query.filterString=='category'){
    return await this.appService.getShopPageEventsByCategory(query.filterString);
  }
  if(query.filterString=='collection'){
    return await this.appService.getShopPageEventsByCollection(query.filterString);
  }
  if(query.filterString=='color'){
    return await this.appService.getShopPageEventsByColor(query.filterString);
  }
    return  await this.appService.getShopPageEvents();
  }
}
