export class Guide {
    name: string;
    href: string;
    allRecordsAvailableOnline: boolean;
    constructor(name: string, href: string, allRecordsAvailableOnline: boolean) {
        this.name = name;
        this.href = href;
        this.allRecordsAvailableOnline = allRecordsAvailableOnline;
    }
}