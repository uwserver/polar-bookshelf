import {HighlightRects} from "./BaseHighlight";
import {IImage} from "./Image";
import {HighlightColor} from "./HighlightColor";

export interface IBaseHighlight {

    /**
     * The rectangles where we need to place content for this highlights.
     */
    rects: HighlightRects;

    /**
     * Optional image for this highlight taken when the highlight was created.
     * This is usually a screenshot of the annotation and what it looks like on
     * screen.  This is the primary image for this highlight and not includes in
     * the images below which are optional / secondary images.
     */
    image?: IImage;

    /**
     * Images for this highlight.  By default there are none.
     */
    images: {[key: string]: IImage};

    /**
     * The color of this highlight. Defaults to yellow if undefined.
     */
    color?: HighlightColor;


    position?: Position;

}

/**
 * The position of a highlight is the absolute position on the page in pixels
 * at 100% zoom level.  Some systems (like pagemarks and area highlights) use
 * percentage placement but text highlights use absolute placement (a poor
 * design issue) but we have to unify on absolute for compatibility reasons
 * with text highlights.  We could later add both systems but we need to at
 * least have the absolute position for portability reasons for area
 * highlights.
 */
export interface Position {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

