import { BehaviorSubject } from "rxjs";

export class CollectionManager extends BehaviorSubject<any> {
    constructor() {
        super(null);
    }

    public getIndexByCriteriaAsync = (options: any): Promise<{index:any}> => {
        return new Promise((resolve) => {
            var index: any = null;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i][options.criteria.key] == options.criteria.value) index = i;
            }
            resolve({ index: index });
        });
    }

    private _numberOfItems: number;

    public get numberOfItems() { return this._numberOfItems; }

    public set numberOfItems(value: number) { this._numberOfItems = value; }

    private _items: any[];

    public get items() { return this._items; }

    public set items(value: any[]) { this._items = value; }
}