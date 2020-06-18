import Map from 'ol/Map';
import Control from './control';
import DropDownBox from './dropdownbox';
declare class Layout {
    layoutNode: HTMLElement;
    controlContainerNode: HTMLElement;
    layoutFrameNode: HTMLElement;
    controlSelectNode: HTMLElement;
    currentWidth: number;
    currentControl: Control;
    dropdownbox: DropDownBox;
    map: Map;
    refMap: Map;
    layoutBorderWidth: number;
    controlMap: {
        指北针: string[];
        比例尺: string[];
        文字: string[];
    };
    constructor(options: {
        [key: string]: any;
    });
    refMapChange(): void;
    resize(node: HTMLElement): void;
    calculateWidthAndHeight(containerHeight: number, containerWidth: number, borderWidth: number, radio?: number): {
        width: number;
        height: number;
    };
}
export default Layout;
//# sourceMappingURL=layout.d.ts.map