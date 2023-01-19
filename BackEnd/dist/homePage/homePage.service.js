"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageService = void 0;
const common_1 = require("@nestjs/common");
const { Client } = require('pg');
let HomePageService = class HomePageService {
    getHello() {
        return 'Hello World!';
    }
    async getHomePageEvents() {
        let homePageData = [];
        const client = new Client({
            connectionString: 'postgres://arimayhelbtusv:4f065cfeb2e1f10411198fb401221468c059464c84cfd27ba6af022feaeadb69@ec2-52-22-226-8.compute-1.amazonaws.com:5432/d69tgvm526jhq7',
            ssl: {
                rejectUnauthorized: false
            }
        });
        client.connect();
        const { rows } = await client.query('SELECT  * FROM  pdt.homePage_data');
        homePageData = rows;
        console.log('before', homePageData);
        return homePageData;
    }
};
HomePageService = __decorate([
    (0, common_1.Injectable)()
], HomePageService);
exports.HomePageService = HomePageService;
//# sourceMappingURL=homePage.service.js.map