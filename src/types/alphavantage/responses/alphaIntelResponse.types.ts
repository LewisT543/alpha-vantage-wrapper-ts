export type AVIntelResponse = NewsResponse | PortfoliosResponse
export interface NewsResponse {
  items:                      string;
  sentiment_score_definition: string;
  relevance_score_definition: string;
  feed:                       NewsFeedResponse[];
}

export interface NewsFeedResponse {
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
  overall_sentiment_label: string;
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
  ticker_sentiment_label: string;
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
  measurement_start: string;
  start_value_usd:   string;
  measurement_end:   string;
  end_value_usd:     string;
  percent_gain:      string;
}

export interface SinglePortfolio {
  symbol: string;
  shares: string;
}


