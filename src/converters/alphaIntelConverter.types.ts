import {
  AVIntelResponse,
  NewsFeedResponse,
  NewsResponse,
  NewsResponseTopic,
  NewsTickerSentiment, PortfolioRanking, PortfoliosResponse, SinglePortfolio
} from "../types/alphavantage/responses/alphaIntelResponse.types";
import {getDateFromString} from "../utils";
import {
  AVIntelData,
  NewsData,
  NewsFeedData,
  NewsTickerSentimentData,
  NewsTopicData, PortfolioRankingData, PortfoliosData, SinglePortfolioData
} from "../types/alphavantage/data/alphaIntelData.types";

export const isNewsIntel = (response: AVIntelResponse): response is NewsResponse => (response as NewsResponse).feed !== undefined
export const isPortfolioIntel = (response: AVIntelResponse): response is PortfoliosResponse => (response as PortfoliosResponse).ranking !== undefined

export const convertAlphaIntelToData = (response: AVIntelResponse): AVIntelData => {
  if (isNewsIntel(response)) return convertNewsToData(response)
  if (isPortfolioIntel(response)) return convertPortfoliosToData(response)
  throw new Error(`convertAlphaIntelData failed: ${response}`)
}

const convertNewsToData = (response: NewsResponse): NewsData => ({
  items:                      Number(response.items),
  sentiment_score_definition: response.sentiment_score_definition,
  relevance_score_definition: response.relevance_score_definition,
  feed:                       response.feed?.map(convertFeed)
})

const convertPortfoliosToData = (response: PortfoliosResponse): PortfoliosData => ({
  season:       response.season,
  ranking:      response.ranking.map(convertPortfolioRaking)
})

const convertFeed = (feedItem: NewsFeedResponse): NewsFeedData => ({
  title:                   feedItem.title,
  url:                     feedItem.url,
  time_published:          getDateFromString(feedItem.time_published),
  authors:                 feedItem.authors,
  summary:                 feedItem.summary,
  banner_image:            feedItem?.banner_image === undefined ? null : feedItem.banner_image,
  source:                  feedItem.source,
  category_within_source:  feedItem.category_within_source,
  source_domain:           feedItem.source_domain,
  topics:                  feedItem.topics.map(convertFeedTopic),
  overall_sentiment_score: Number(feedItem.overall_sentiment_score),
  overall_sentiment_label: feedItem.overall_sentiment_label,
  ticker_sentiment:        feedItem.ticker_sentiment.map(convertTickerSentiment)
})

const convertFeedTopic = (topic: NewsResponseTopic): NewsTopicData => ({
  topic:                   topic.topic,
  relevance_score:         Number(topic.relevance_score)
})

const convertTickerSentiment = (tickerSentiment: NewsTickerSentiment): NewsTickerSentimentData => ({
  ticker:                 tickerSentiment.ticker,
  relevance_score:        Number(tickerSentiment.relevance_score),
  ticker_sentiment_score: Number(tickerSentiment.ticker_sentiment_score),
  ticker_sentiment_label: tickerSentiment.ticker_sentiment_label
})

const convertPortfolioRaking = (ranking: PortfolioRanking): PortfolioRankingData => ({
  rank:                 Number(ranking.rank),
  portfolio:            ranking.portfolio.map(convertSinglePortfolio),
  measurement_start:    getDateFromString(ranking.measurement_start),
  start_value_usd:      Number(ranking.start_value_usd),
  measurement_end:      getDateFromString(ranking.measurement_end),
  end_value_usd:        Number(ranking.end_value_usd),
  percent_gain:         Number(ranking.percent_gain)
})

const convertSinglePortfolio = (portfolio: SinglePortfolio): SinglePortfolioData => ({
  symbol:   portfolio.symbol,
  shares:   Number(portfolio.shares)
})
