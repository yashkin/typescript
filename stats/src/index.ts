
import { MatchReader } from './MatchReader';

import { WinsAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './ReportTargets/HtmlReport';


const matchReader =  MatchReader.fromCSv('football.csv');
matchReader.load();
  
const summary = new Summary (
    new WinsAnalysis('Man United'),
    new HtmlReport()
)

summary.buildAndPrintReport(matchReader.matches);