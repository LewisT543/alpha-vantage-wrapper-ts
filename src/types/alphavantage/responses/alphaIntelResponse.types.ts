export type AVIntelResponse = NewsResponse | PortfoliosResponse
export interface NewsResponse {
  items:                      string;
  sentiment_score_definition: string;
  relevance_score_definition: string;
  feed:                       NewsResponseFeed[];
}

export interface NewsResponseFeed {
  title:                   string;
  url:                     string;
  time_published:          string;
  authors:                 string[];
  summary:                 string;
  banner_image:            null | string;
  source:                  string;
  category_within_source:  string;
  source_domain:           string;
  topics:                  NewsResponseTopic[];
  overall_sentiment_score: number;
  overall_sentiment_label: SentimentLabel;
  ticker_sentiment:        NewsTickerSentiment[];
}

export enum SentimentLabel {
  Bearish = "Bearish",
  Bullish = "Bullish",
  Neutral = "Neutral",
  SomewhatBearish = "Somewhat-Bearish",
  SomewhatBullish = "Somewhat-Bullish",
}

export interface NewsTickerSentiment {
  ticker:                 string;
  relevance_score:        string;
  ticker_sentiment_score: string;
  ticker_sentiment_label: SentimentLabel;
}

export interface NewsResponseTopic {
  topic:           string;
  relevance_score: string;
}

export interface PortfoliosResponse {
  season:  string;
  ranking: PortfolioRanking[];
}

export interface PortfolioRanking {
  rank:              string;
  portfolio:         SinglePortfolio[];
  measurement_start: Date;
  start_value_usd:   string;
  measurement_end:   Date;
  end_value_usd:     string;
  percent_gain:      string;
}

export interface SinglePortfolio {
  symbol: string;
  shares: string;
}


