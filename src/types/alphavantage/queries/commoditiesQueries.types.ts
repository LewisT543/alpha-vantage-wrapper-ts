import {AlphaVantageQuery, WithAVDataType} from "./avQuery.types";
import {AlphaVantageCommoditiesFn, AVCommoditiesIntervalEnum} from "../../enums";

export interface WithAVCommoditiesInterval {
  interval?: AVCommoditiesIntervalEnum;
}
export interface CommoditiesBaseQuery extends AlphaVantageQuery, WithAVCommoditiesInterval, WithAVDataType { fn: AlphaVantageCommoditiesFn; }

export interface CommoditiesWTIQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.WTI; }
export interface CommoditiesBrentQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.BRENT; }
export interface CommoditiesNatGasQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.NATURAL_GAS; }
export interface CommoditiesCopperQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.COPPER; }
export interface CommoditiesAluminiumQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.ALUMINUM; }
export interface CommoditiesWheatQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.WHEAT; }
export interface CommoditiesCornQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.CORN; }
export interface CommoditiesCottonQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.COTTON; }
export interface CommoditiesSugarQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.SUGAR; }
export interface CommoditiesCoffeeQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.COFFEE; }
export interface CommoditiesAllCommoditiesQuery extends CommoditiesBaseQuery { fn: AlphaVantageCommoditiesFn.ALL_COMMODITIES; }

export type AVCommoditiesQuery = CommoditiesWTIQuery | CommoditiesBrentQuery | CommoditiesNatGasQuery | CommoditiesCopperQuery |
  CommoditiesAluminiumQuery | CommoditiesWheatQuery | CommoditiesCornQuery | CommoditiesCottonQuery | CommoditiesSugarQuery |
  CommoditiesCoffeeQuery | CommoditiesAllCommoditiesQuery