export class Guide {
    name: string;
    recommended: boolean;
    href: string;
    all_records_available_online: boolean;
    constructor(name: string, recommended: boolean, href: string, all_records_available_online: boolean) {
        this.name = name;
        this.recommended = recommended;
        this.href = href;
        this.all_records_available_online = all_records_available_online;
    }
}