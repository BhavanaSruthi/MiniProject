import { ShopPageService } from './shopPage.service';
export declare class ShopPageController {
    private readonly appService;
    constructor(appService: ShopPageService);
    getShopPageEvents(req: any, query: any): Promise<any>;
}
