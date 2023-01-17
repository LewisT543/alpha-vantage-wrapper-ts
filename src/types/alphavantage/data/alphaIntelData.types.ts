import {SentimentLabel} from "../responses/alphaIntelResponse.types";

export type AVIntelData = NewsData | PortfoliosData
export interface NewsData {
  items:                      number;
  sentiment_score_definition: string;
  relevance_score_definition: string;
  feed:                       NewsFeedData[];
}

export interface NewsFeedData {
  title:                   string;
  url:                     string;
  time_published:          Date;
  authors:                 string[];
  summary:                 string;
  banner_image:            null | string;
  source:                  string;
  category_within_source:  string;
  source_domain:           string;
  topics:                  NewsTopicData[];
  overall_sentiment_score: number;
  overall_sentiment_label: SentimentLabel;
  ticker_sentiment:        NewsTickerSentimentData[];
}


export interface NewsTickerSentimentData {
  ticker:                 string;
  relevance_score:        number;
  ticker_sentiment_score: number;
  ticker_sentiment_label: SentimentLabel;
}

export interface NewsTopicData {
  topic:           string;
  relevance_score: number;
}

export interface PortfoliosData {
  season:  string;
  ranking: PortfolioRankingData[];
}

export interface PortfolioRankingData {
  rank:              number;
  portfolio:         SinglePortfolioData[];
  measurement_start: Date;
  start_value_usd:   number;
  measurement_end:   Date;
  end_value_usd:     number;
  percent_gain:      number;
}

export interface SinglePortfolioData {
  symbol: string;
  shares: number;
}


