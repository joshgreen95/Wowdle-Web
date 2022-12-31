//Template for NPC Object, Used when fetching data from firebase
export class NPC {
    constructor(name, zone, continent, faction, img, id) {
        this.name = name;
        this.zone = zone;
        this.continent = continent;
        this.faction = faction;
        this.img = img;
        this.id = id;
    }

};