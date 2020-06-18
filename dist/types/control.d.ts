declare abstract class Control {
    private dataUrl;
    private image;
    constructor(options: {
        [key: string]: any;
    });
    getImageElement(): HTMLImageElement;
    setImageElement(image: HTMLImageElement): void;
    getDataUrl(): string;
    setDataUrl(dataUrl: string): void;
}
export default Control;
//# sourceMappingURL=control.d.ts.map