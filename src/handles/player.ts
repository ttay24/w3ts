/** @noSelfInFile **/

import { Handle } from "./handle";
import { Force } from "./force";
import { Point } from "./point";

export class MapPlayer extends Handle<player> {

  private constructor();
  private constructor(index: number);
  private constructor(index?: number) {
    super(Player, [index]);
  }

  private scoreScreen = true;

  static fromHandle(handle: player): MapPlayer {
    this.setDefaultHandle(handle);
    return new MapPlayer(GetPlayerId(handle));
  }

  static fromIndex(index: number) {
    return this.fromHandle(Player(index));
  }

  static fromLocal() {
    return this.fromHandle(GetLocalPlayer());
  }

  public static fromFilter() {
    return MapPlayer.fromHandle(GetFilterPlayer());
  }

  public static fromEnum() {
    return MapPlayer.fromHandle(GetEnumPlayer());
  }

  public static fromTrigger() {
    return MapPlayer.fromHandle(GetTriggerPlayer());
  }

  public isPlayerAlly(otherPlayer: MapPlayer) {
    return IsPlayerAlly(this.handle, otherPlayer.handle);
  }

  public isPlayerEnemy(otherPlayer: MapPlayer) {
    return IsPlayerEnemy(this.handle, otherPlayer.handle);
  }

  public inForce(whichForce: Force) {
    return IsPlayerInForce(this.handle, whichForce.handle);
  }

  public isObserver() {
    return IsPlayerObserver(this.handle);
  }

  public coordsVisible(x: number, y: number) {
    return IsVisibleToPlayer(x, y, this.handle);
  }

  public pointVisible(whichPoint: Point) {
    return IsLocationVisibleToPlayer(whichPoint.handle, this.handle);
  }

  public coordsFogged(x: number, y: number) {
    return IsFoggedToPlayer(x, y, this.handle);
  }

  public pointFogged(whichPoint: Point) {
    return IsLocationFoggedToPlayer(whichPoint.handle, this.handle);
  }

  public coordsMasked(x: number, y: number) {
    return IsMaskedToPlayer(x, y, this.handle);
  }

  public pointMasked(whichPoint: Point) {
    return IsLocationMaskedToPlayer(whichPoint.handle, this.handle);
  }

  public getRace() {
    return GetPlayerRace(this.handle);
  }

  public get id() {
    return GetPlayerId(this.handle);
  }

  public get name() {
    return GetPlayerName(this.handle);
  }

  public set name(value: string) {
    SetPlayerName(this.handle, value);
  }

  public getUnitCount(includeIncomplete: boolean) {
    return GetPlayerUnitCount(this.handle, includeIncomplete);
  }

  public getUnitCountByType(unitName: string, includeIncomplete: boolean, includeUpgrades: boolean) {
    return GetPlayerTypedUnitCount(this.handle, unitName, includeIncomplete, includeUpgrades);
  }

  public getStructureCount(includeIncomplete: boolean) {
    return GetPlayerStructureCount(this.handle, includeIncomplete);
  }

  public getState(whichPlayerState: playerstate) {
    return GetPlayerState(this.handle, whichPlayerState);
  }

  public getScore(whichPlayerScore: playerscore) {
    return GetPlayerScore(this.handle, whichPlayerScore);
  }

  public compareAlliance(otherPlayer: MapPlayer, whichAllianceSetting: alliancetype) {
    return GetPlayerAlliance(this.handle, otherPlayer.handle, whichAllianceSetting);
  }

  public get handicap() {
    return GetPlayerHandicap(this.handle);
  }

  public set handicap(handicap: number) {
    SetPlayerHandicap(this.handle, handicap);
  }

  public get handicapXp() {
    return GetPlayerHandicapXP(this.handle);
  }

  public set handicapXp(handicap: number) {
    SetPlayerHandicapXP(this.handle, handicap);
  }

  public setTechMaxAllowed(techId: number, maximum: number) {
    SetPlayerTechMaxAllowed(this.handle, techId, maximum);
  }

  public getTechMaxAllowed(techId: number) {
    GetPlayerTechMaxAllowed(this.handle, techId);
  }

  public addTechResearched(techId: number, levels: number) {
    AddPlayerTechResearched(this.handle, techId, levels);
  }

  public setTechResearched(techId: number, setToLevel: number) {
    SetPlayerTechResearched(this.handle, techId, setToLevel);
  }

  public getTechResearched(techId: number, specificonly: boolean) {
    GetPlayerTechResearched(this.handle, techId, specificonly);
  }

  public getTechCount(techId: number, specificonly: boolean) {
    GetPlayerTechCount(this.handle, techId, specificonly);
  }

  public setUnitsOwner(newOwner: number) {
    SetPlayerUnitsOwner(this.handle, newOwner);
  }

  public cripple(toWhichPlayers: Force, flag: boolean) {
    CripplePlayer(this.handle, toWhichPlayers.handle, flag);
  }

  public setAbilityAvailable(abilId: number, avail: boolean) {
    SetPlayerAbilityAvailable(this.handle, abilId, avail);
  }

  public setState(whichPlayerState: playerstate, value: number) {
    SetPlayerState(this.handle, whichPlayerState, value);
  }

  public remove(gameResult: playergameresult) {
    RemovePlayer(this.handle, gameResult);
  }

  // Used to store hero level data for the scorescreen
  // before units are moved to neutral passive in melee games
  public cacheHeroData() {
    CachePlayerHeroData(this.handle);
  }

  public set color(color: playercolor) {
    SetPlayerColor(this.handle, color);
  }

  public get color() {
    return GetPlayerColor(this.handle);
  }

  public setAlliance(otherPlayer: MapPlayer, whichAllianceSetting: alliancetype, value: boolean) {
    SetPlayerAlliance(this.handle, otherPlayer.handle, whichAllianceSetting, value);
  }

  public setTaxRate(otherPlayer: MapPlayer, whichResource: playerstate, rate: number) {
    SetPlayerTaxRate(this.handle, otherPlayer.handle, whichResource, rate);
  }

  public get onScoreScreen() {
    return this.scoreScreen;
  }

  public set onScoreScreen(flag: boolean) {
    SetPlayerOnScoreScreen(this.handle, flag);
  }

  public getTeam() {
    return GetPlayerTeam(this.handle);
  }

  public getStartLocation() {
    return GetPlayerStartLocation(this.handle);
  }

  public isSelectable() {
    return GetPlayerSelectable(this.handle);
  }

  public getController() {
    return GetPlayerController(this.handle);
  }

  public getSlotState() {
    return GetPlayerSlotState(this.handle);
  }

  public getTaxRate(otherPlayer: player, whichResource: playerstate) {
    return GetPlayerTaxRate(this.handle, otherPlayer, whichResource);
  }

  public isRacePrefSet(pref: racepreference) {
    return IsPlayerRacePrefSet(this.handle, pref);
  }

  public removeAllGuardPositions() {
    RemoveAllGuardPositions(this.handle);
  }

}