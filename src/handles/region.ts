/** @noSelfInFile **/

import { Handle } from "./handle";
import { Rectangle } from "./rect";
import { Point } from "./point";
import { Unit } from "./unit";

export class Region extends Handle<region> {

  constructor() {
    super(CreateRegion, []);
  }

  static fromHandle(handle: region): Region {
    this.setDefaultHandle(handle);
    return new Region();
  }

  public destroy() {
    RemoveRegion(this.handle);
  }

  public addRect(r: Rectangle) {
    RegionAddRect(this.handle, r.handle);
  }

  public clearRect(r: Rectangle) {
    RegionClearRect(this.handle, r.handle);
  }

  public addCell(x: number, y: number) {
    RegionAddCell(this.handle, x, y);
  }

  public addCellPoint(whichPoint: Point) {
    RegionAddCellAtLoc(this.handle, whichPoint.handle);
  }

  public clearCell(x: number, y: number) {
    RegionClearCell(this.handle, x, y);
  }

  public clearCellPoint(whichPoint: Point) {
    RegionClearCellAtLoc(this.handle, whichPoint.handle);
  }

  public containsUnit(whichUnit: Unit) {
    return IsUnitInRegion(this.handle, whichUnit.handle);
  }

  public containsCoords(x: number, y: number) {
    return IsPointInRegion(this.handle, x, y);
  }

  public containsPoint(whichPoint: Point) {
    IsLocationInRegion(this.handle, whichPoint.handle);
  }

}
