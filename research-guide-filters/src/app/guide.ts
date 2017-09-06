export class Guide {
    name: string;
    href: string;
    allRecordsAvailableOnline: boolean;
    keywords: string[];
    constructor(name: string, href: string, allRecordsAvailableOnline: boolean, keywords: string[]) {
        this.name = name;
        this.href = href;
        this.allRecordsAvailableOnline = allRecordsAvailableOnline;
        this.keywords = keywords;
    }
}