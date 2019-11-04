import { Injectable, EventEmitter } from '@angular/core';


@Injectable()


export class SearchTableServiceService {
  public selecterRowEvent$ = new EventEmitter();

  constructor(
  ) { }

  selectedInboxConfig = {
    "fields": "",
    "columnDefs": [
      {
        "field": "MatchScore",
        "displayName": "Match Score",
        "dataType": 'NUMBER',
        "isSortable": true,
        "isLink": "true",
        "propertyId": "0",
        "enableSorting": true
      },
      {
        "field": "Cosmo Status",
        "displayName": "Cosmo Status",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "",
        "propertyId": "1",
        "enableSorting": true
      },
      {
        "field": "Type",
        "displayName": "Type",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "",
        "propertyId": "2",
        "enableSorting": true
      },
      {
        "field": "RV",
        "displayName": "RV#",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "",
        "propertyId": "3",
        "enableSorting": true
      },
      {
        "field": "Cosmo",
        "displayName": "Cosmo#",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "",
        "propertyId": "4",
        "enableSorting": true
      }

    ]
  }

  displayData = [
    {
      "MatchScore": 96,
      "Cosmo Status": "Unverified",
      "Type": { 'value': "Episode", 'match': '90' },
      "RV": "RV#66748",
      "Cosmo": "861802",
      "Season": { 'value': "5", 'match': '90' },
      "Episode": { 'value': "16", 'match': '90' },
      "Title": { 'value': 'The Industry News and Marketplace', 'match': '30' },
      "Description": { 'value': 'Alan feels that he is being mocked by Jonathan Summers show, and may wind up the butt of a joke if he accepts an offer to appear on the show. Meanwhile, Richard and Victor compete to earn a higher salary.', 'match': '90' },
      "Duration": { 'value': '23min', 'match': '100' },
      "SeriesMasterValue": { 'value': '2', 'match': '90' },
      "ReleaseYear": { 'value': '2019', 'match': '100' },
      "Language": { 'value': 'ENG', 'match': '90' },
      "ReleaseType": { 'value': 'English', 'match': '90' },
    },

    {
      "MatchScore": 83,
      "Cosmo Status": "Unverified",
      "Type": { 'value': "TV Series", 'match': '90' },
      "RV": "RV#66749",
      "Cosmo": "2320467",
      "Season": { 'value': "5", 'match': '90' },
      "Episode": { 'value': "16", 'match': '90' },
      "Title": { 'value': 'The Industry', 'match': '100' },
      "Description": { 'value': 'A very black comic satire of the television and film industry follows the rise of an ambitious and amoral script reader to the top. Made for Canadian TV.', 'match': '20' },
      "Duration": { 'value': '70min', 'match': '20' },
      "SeriesMasterValue": { 'value': '2', 'match': '90' },
      "ReleaseYear": { 'value': '2018', 'match': '70' },
      "Language": { 'value': 'ENG', 'match': '90' },
      "ReleaseType": { 'value': 'English', 'match': '90' },
    },
    {
      "MatchScore": 87,
      "Cosmo Status": "Unverified",
      "Type": { 'value': "Movie", 'match': '90' },
      "RV": "RV#6750",
      "Cosmo": "3343111",
      "Season": { 'value': "5", 'match': '90' },
      "Episode": { 'value': "12", 'match': '70' },
      "Title": { 'value': 'The Industry', 'match': '100' },
      "Description": { 'value': 'Features on the outdoor industry, including products, services and hunting tips.', 'match': '20' },
      "Duration": { 'value': '20min', 'match': '100' },
      "SeriesMasterValue": { 'value': '1', 'match': '90' },
      "ReleaseYear": { 'value': '2019', 'match': '100' },
      "Language": { 'value': 'ENG', 'match': '100' },
      "ReleaseType": { 'value': 'English', 'match': '90' },
    },
    {
      "MatchScore": 73,
      "Cosmo Status": "Unverified",
      "Type": { 'value': "Movie", 'match': '90' },
      "RV": "RV#6750",
      "Cosmo": "17050890",
      "Season": { 'value': "5", 'match': '90' },
      "Episode": { 'value': "16", 'match': '90' },
      "Title": { 'value': 'The Story of Taiwan Industry', 'match': '90' },
      "Description": { 'value': 'A daily series featuring entertainment-industry news and clips from upcoming films.', 'match': '20' },
      "Duration": { 'value': '20min', 'match': '100' },
      "SeriesMasterValue": { 'value': '1', 'match': '90' },
      "ReleaseYear": { 'value': '2019', 'match': '100' },
      "Language": { 'value': 'HIN', 'match': '70' },
      "ReleaseType": { 'value': 'English', 'match': '90' },
    },
    {
      "MatchScore": 35,
      "Cosmo Status": "Unverified",
      "Type": { 'value': "Movie", 'match': '90' },
      "RV": "RV#5750",
      "Cosmo": "21942224",
      "Season": { 'value': "3", 'match': '20' },
      "Episode": { 'value': "13", 'match': '90' },
      "Title": { 'value': 'Industry on the Ruhr', 'match': '30' },
      "Description": { 'value': 'Series focusing on the Ruhr Valley, a former industrial powerhouse in Germany.', 'match': '20' },
      "Duration": { 'value': '60min', 'match': '20' },
      "SeriesMasterValue": { 'value': '2', 'match': '90' },
      "ReleaseYear": { 'value': '2017', 'match': '70' },
      "Language": { 'value': 'ENG', 'match': '90' },
      "ReleaseType": { 'value': 'English', 'match': '90' },
    },
    {
      "MatchScore": 66,
      "Cosmo Status": "Unverified",
      "Type": { 'value': "TV Series", 'match': '90' },
      "RV": "RV#66749",
      "Cosmo": "31940972",
      "Season": { 'value': "3", 'match': '70' },
      "Episode": { 'value': "5", 'match': '20' },
      "Title": { 'value': 'The Traditional Trades Rattan Industry', 'match': '70' },
      "Description": { 'value': 'Rediscover traditional trades that have remained the same for decades - but remain as popular as they were back in the day.', 'match': '20' },
      "Duration": { 'value': '50min', 'match': '20' },
      "SeriesMasterValue": { 'value': '2', 'match': '90' },
      "ReleaseYear": { 'value': '2015', 'match': '10' },
      "Language": { 'value': 'ENG', 'match': '90' },
      "ReleaseType": { 'value': 'English', 'match': '90' },
    },
    {
      "MatchScore": 43,
      "Cosmo Status": "Unverified",
      "Type": { 'value': "Episode", 'match': '90' },
      "RV": "RV#66748",
      "Cosmo": "31990476",
      "Season": { 'value': "5", 'match': '90' },
      "Episode": { 'value': "16", 'match': '90' },
      "Title": { 'value': 'The Traditional Trades Incense Industry', 'match': '30' },
      "Description": { 'value': 'Rediscover traditional trades that have remained the same for decades - but remain as popular as they were back in the day.', 'match': '90' },
      "Duration": { 'value': '20min', 'match': '90' },
      "SeriesMasterValue": { 'value': '2', 'match': '90' },
      "ReleaseYear": { 'value': '2016', 'match': '10' },
      "Language": { 'value': 'ENG', 'match': '90' },
      "ReleaseType": { 'value': 'English', 'match': '90' },
    },

    {
      "MatchScore": 76,
      "Cosmo Status": "Unverified",
      "Type": { 'value': "TV Series", 'match': '90' },
      "RV": "RV#66749",
      "Cosmo": "32039974",
      "Season": { 'value': "5", 'match': '90' },
      "Episode": { 'value': "16", 'match': '90' },
      "Title": { 'value': 'The Traditional Trades Ceramic Industry', 'match': '30' },
      "Description": { 'value': 'Rediscover traditional trades that have remained the same for decades - but remain as popular as they were back in the day.', 'match': '20' },
      "Duration": { 'value': '90min', 'match': '20' },
      "SeriesMasterValue": { 'value': '2', 'match': '90' },
      "ReleaseYear": { 'value': '2015', 'match': '10' },
      "Language": { 'value': 'ENG', 'match': '90' },
      "ReleaseType": { 'value': 'English', 'match': '90' },
    }

  ];

  recordTobematched = {
    "MatchScore": 83,
    "Cosmo Status": "Unverified",
    "Type": "Episode",
    "RV": "RV#66748",
    "Cosmo": "588457",
    "Season": "5",
    "Episode": "16",
    "Title": "Producer's Cut",
    "SeriesMasterValue": "2",
    "Description": 'Alan is convinced that the show "Producers Cut," which stars Jonathan Summers, makes fun of him. He recruits Wanda to work for him and spy on Jonathan s production company. Meanwhile, Veronica is busy working out new contracts for Richard and Victor, who become obsessed with which one of them is earning more money.',
    "Duration": "22min",
    "ReleaseYear": "2019",
    "Language": "ENG",
    "ReleaseType": "English"
  };


}
