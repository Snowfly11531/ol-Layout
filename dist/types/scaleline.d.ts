import Control from './control';
import Map from 'ol/Map';
declare class Scaleline extends Control {
    map: Map;
    barPercent: number;
    fontPercent: number;
    texts: HTMLCollectionOf<SVGTextElement>;
    constructor(options: {
        [key: string]: any;
    });
}
export default Scaleline;
//# sourceMappingURL=scaleline.d.ts.map