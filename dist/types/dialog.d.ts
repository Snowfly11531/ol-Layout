/// <reference types="node" />
import '../css/dialog.css';
import { EventEmitter } from 'events';
declare class Dialog extends EventEmitter {
    static staticDialog: Dialog;
    dialogDiv: HTMLDivElement;
    containerDiv: HTMLDivElement;
    header: HTMLDivElement;
    closeButton: HTMLDivElement;
    titleDiv: HTMLDivElement;
    ensureBtn: HTMLButtonElement;
    cancelBtn: HTMLButtonElement;
    footer: HTMLDivElement;
    backgroundDiv: HTMLDivElement;
    constructor();
    setContent(content: HTMLElement): void;
    setTitle(title: string): void;
    static showDialog(args: any): Dialog;
    transfrom(element: HTMLElement, top: number, left: number, time?: number): void;
}
export default Dialog;
//# sourceMappingURL=dialog.d.ts.map