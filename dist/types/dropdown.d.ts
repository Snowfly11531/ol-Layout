/// <reference types="node" />
import '../css/dropdown.css';
import { EventEmitter } from 'events';
declare class DropDown extends EventEmitter {
    rootElement: HTMLElement;
    dropdownElement: HTMLElement;
    dropBtnElement: HTMLElement;
    dropdownContentElement: HTMLElement;
    nameList: Array<string>;
    appendList: Array<object>;
    selectItem: number;
    selectValue: string;
    constructor(options: {
        [key: string]: any;
    });
}
export default DropDown;
//# sourceMappingURL=dropdown.d.ts.map