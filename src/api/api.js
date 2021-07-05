import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

const alphaUrl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey="+apiKey
const baseUrl = "https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False"

const fields = "&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume"

function getRange(startTime, endTime) {
    return `&StartTime=${startTime}%2016:0&EndTime=${endTime}%2023:59`
}

function getPeriod(period, precision /**Minutes| Hours*/) {
    console.log(precision)
    return `&period=${period}&Precision=${precision}`
}

const client = {
    getData: (period, precision) => axios.get(baseUrl + getPeriod(period, precision) + "&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59" + fields),
    getQuoteInfo: () => axios.get(alphaUrl)
}

function getParsedDate(daysAgo = 0) {
    const daysInMilliseconds = daysAgo * 60000 * 60 * 24

    const date = new Date(new Date().getTime() - daysInMilliseconds)

    const d = date.getDate()
    const m = date.getMonth() + 1
    const y = date.getFullYear()
    return `${m}/${d}/${y}`
}



export default client